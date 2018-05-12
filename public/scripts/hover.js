$( document ).ready(function() {
  $(".tweet-container").on('mouseover', function(event){
    $(this).css('box-shadow','2px 4px 10px #AAA');
  });

    $(".tweet-container").on('mouseout',function(event){
    $(this).css('box-shadow','');
  });
});