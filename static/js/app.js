$(function(){
  $('.header .time').countDown({
      with_separators: false
  });

  
  window.heroswipe = new Swipe(document.getElementById('hero-swipe'), {
    speed: 400,
    auto: 6000000,
    continuous: true,
    callback: function(pos, slide) {
        var bullets;
        bullets = $('.swipe-bullets .bullet');
        bullets.removeClass('active');
        bullets.eq(pos).addClass('active');
    }
  });
  $(".swipe-bullets .bullet").each(function(i,item){
    $(item).click(function(){
      heroswipe.slide(i)
      $('.swipe-bullets .bullet').removeClass("active")
      $(item).addClass("active")
    })
  })

  $('.swipe-controls').on('click', '.prev', function (click) {
      click.stopPropagation();
      click.preventDefault();
      return heroswipe.prev();
  });

  $('.swipe-controls').on('click', '.next', function (click) {
      click.stopPropagation();
      click.preventDefault();
      return heroswipe.next();
  });

});
