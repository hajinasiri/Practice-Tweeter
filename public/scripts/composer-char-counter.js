$( document ).ready(function() {
  $(".container .new-tweet .text").on('keyup', function(event){
    var remained = 140 - $(this).val().length;
    $(this).parent().siblings('.counter').text(remained);
    if(remained < 0){
      $(this).parent().siblings('.counter').css('color', 'red');
    } else{
      $(this).parent().siblings('.counter').css('color', 'black');
    }
  });
});