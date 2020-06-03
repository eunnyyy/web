$(function(){
    $('.menu a').hover(function(){
      $('.submenu_box').stop().slideToggle();
      $('.navi_box_bg').stop().slideToggle();
    });
  });

  setInterval(function(){
      $(".slide-img").delay("2000");
      $(".slide-img").animate({marginLeft:"-1200px"}, "500");
      $(".slide-img").delay("2000");
      $(".slide-img").animate({marginLeft:"-2400px"}, "500");
      $(".slide-img").delay("2000");
      $(".slide-img").animate({marginLeft:"0px"}, "500");
  });


  
  $(function(){
    $(".popup-open").on('click', function(){
        $(".popup").fadeIn();
    });

    $(".btn-close").on('click', function(){
        $(".popup").fadeOut();
    });
  });