$(function(){
  $('.ChatForm').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    console.log(1)
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
});