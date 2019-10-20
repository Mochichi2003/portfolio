$(function(){
   // #にダブルクォーテーションが必要
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
   // 省略...
   $(window).scroll(function() {
     // 「TOPに戻る」ボタンを取得します。
     var $toTopButton = $('#scroll_to_top');
 
     // 縦にどれだけスクロールしたかを取得します。
     var scrollTop = $(this).scrollTop();
 
     // ウィンドウの縦幅を取得します。
     var windowHeight = $(this).height();
 
     if (scrollTop >= windowHeight) {
       // ウィンドウの縦幅以上にスクロールしていた場合、
       // 「TOPに戻る」ボタンを表示します。
       $toTopButton.show();
     } else {
       // ウィンドウの縦幅以上にスクロールしていない場合、
       // 「TOPに戻る」ボタンを隠します。
       $toTopButton.hide();
     }
   });
 });