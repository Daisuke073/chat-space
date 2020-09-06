$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      let html = 
          `<div class="ChatMessage">
            <div class="MessageBox">
              <div class="MessageInfo">
                <div class="MessageInfo__name">
                  ${message.user_name}
                </div>
                <div class="MessageInfo__postTime">
                  ${message.created_at}
                </div>
              </div>
              <div class="Message">
                <p class="Message__content">
                  ${message.content}
                </p>
                <img class="Message__image" src="${message.image}">
              </div>
            </div>
          </div>`
          return html
    } 
    else {
      let html = 
      `<div class="ChatMessage">
        <div class="MessageBox">
          <div class="MessageInfo">
            <div class="MessageInfo__name">
              ${message.user_name}
            </div>
            <div class="MessageInfo__postTime">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>
      </div>`
      return html
    }
  }

  $('.ChatForm').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
        $('.MessageField').append(html);
        $('form')[0].reset();
        $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
        $('.ChatForm__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});