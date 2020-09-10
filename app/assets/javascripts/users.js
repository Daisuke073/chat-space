$(function(){
  function addUser(user) {
    let html = 
              `<div class="ChatMember clearfix">
                <p class="ChatMember__name">${user.name}</p>
                <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>`;

    $("#UserSearchResult").append(html);
  }

  function addNoUser() {
    let html = 
                `<div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーが見つかりません</p>
                </div>`;

    $("#UserSearchResult").append(html);
  }

  $(".SettingGroupForm__input").on('keyup', function(){
    let input = $("#UserSearch__field").val();
    $.ajax({
      type: "GET",    //HTTPメソッド
      url: "/users",       //users_controllerの、indexアクションにリクエストの送信先を設定する
      dataType: 'json',
      data:  { keyword: input },   //テキストフィールドに入力された文字を設定する
    })
    .done(function(users) {
      $("#UserSearchResult").empty();
      if (users.length !== 0) {
        users.forEach(function(user) {
          addUser(user)
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
    })
    .fail(function() {
      alert("通信エラーです。ユーザーが表示できません。");
    });
  });

  $("#UserSearchResult").on('click', ".ChatMember__add", function() {
    console.log("発火")
  });
});