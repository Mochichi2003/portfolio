$(function(){
   $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
$(function() {
   $(window).scroll(function() {

     var $toTopButton = $('#scroll_to_top');
 
     var scrollTop = $(this).scrollTop();
 
     var windowHeight = $(this).height();
 
     if (scrollTop >= windowHeight) {

       $toTopButton.show();
     } else {

       $toTopButton.hide();
     }
   });
 });