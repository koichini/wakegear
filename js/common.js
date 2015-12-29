$(function() {
  // back-to-topを隠す
  $('#back-to-top').hide();

  // スクロールされたら表示L
  $(window).scroll(function() {
    if($(this).scrollTop() > 60) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // クリックされたら上にもどる
  $('#back-to-top a').click(function(){
    $('body').animate({
      scrollTop:0
    }, 500);
  });
});

$(function(){
  $('#menu').css({'right':'-18em', 'opacity':0});

  $('#menu_icn').click(function(){
    $('#menu').animate({
      right: '+=18em',
      opacity: 1
    }, 600)
    $('#menu_icn').fadeOut(600);
    return false;
  });
  $('#menu_close').click(function(){
    $('#menu').animate({
      right: '-=18em',
      opacity: 0
    }, 600)
    $('#menu_icn').fadeIn(600);
    return false;
  });

});
