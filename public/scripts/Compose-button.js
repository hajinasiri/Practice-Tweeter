$( document ).ready(function() {
  $(".button").on('mouseover', function(event){
    $(this).css('box-shadow','2px 4px 10px #035d4f');
  });

    $(".button").on('mouseout',function(event){
    $(this).css('box-shadow','');
  });

    $(".button").on('click',function(event){
      $(this).parent().siblings().children().children('.new-tweet').slideToggle();
      $(this).parent().siblings().children().children('.new-tweet').children().children().children(".text").select();
    })
});
