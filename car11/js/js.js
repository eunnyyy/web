$(function(){
    $('.wc-color').click(function(){
        $('.wc').fadeIn();
        $('.sg').css("display","none").fadeOut();
        $('.mc').css("display","none").fadeOut();
        $('.tb').css("display","none").fadeOut();
        $('.sb').css("display","none").fadeOut();
        $('.rf').css("display","none").fadeOut();

        $('.wc-txt').css("display", "block");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "none");

        $('.wc-color').css("border", "3px solid #ccc");
        $('.sg-color').css("border", "1px solid #ccc");
        $('.mc-color').css("border", "1px solid #ccc");
        $('.tb-color').css("border", "1px solid #ccc");
        $('.sb-color').css("border", "1px solid #ccc");
        $('.rf-color').css("border", "1px solid #ccc");
    });

    $('.sg-color').click(function(){
        $('.wc').css("display","none").fadeOut();
        $('.sg').fadeIn();
        $('.mc').css("display","none").fadeOut();
        $('.tb').css("display","none").fadeOut();
        $('.sb').css("display","none").fadeOut();
        $('.rf').css("display","none").fadeOut();

        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "block");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "none");

        $('.wc-color').css("border", "1px solid #ccc");
        $('.sg-color').css("border", "3px solid #ccc");
        $('.mc-color').css("border", "1px solid #ccc");
        $('.tb-color').css("border", "1px solid #ccc");
        $('.sb-color').css("border", "1px solid #ccc");
        $('.rf-color').css("border", "1px solid #ccc");
    });

    $('.mc-color').click(function(){
        $('.wc').css("display","none").fadeOut();
        $('.sg').css("display","none").fadeOut();
        $('.mc').fadeIn();
        $('.tb').css("display","none").fadeOut();
        $('.sb').css("display","none").fadeOut();
        $('.rf').css("display","none").fadeOut();    
        
        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "block");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "none");

        $('.wc-color').css("border", "1px solid #ccc");
        $('.sg-color').css("border", "1px solid #ccc");
        $('.mc-color').css("border", "3px solid #ccc");
        $('.tb-color').css("border", "1px solid #ccc");
        $('.sb-color').css("border", "1px solid #ccc");
        $('.rf-color').css("border", "1px solid #ccc");
    });

    $('.tb-color').click(function(){
        $('.wc').css("display","none").fadeOut();
        $('.sg').css("display","none").fadeOut();
        $('.mc').css("display","none").fadeOut();
        $('.tb').fadeIn();
        $('.sb').css("display","none").fadeOut();
        $('.rf').css("display","none").fadeOut();  
        
        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "block");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "none");

        $('.wc-color').css("border", "1px solid #ccc");
        $('.sg-color').css("border", "1px solid #ccc");
        $('.mc-color').css("border", "1px solid #ccc");
        $('.tb-color').css("border", "3px solid #ccc");
        $('.sb-color').css("border", "1px solid #ccc");
        $('.rf-color').css("border", "1px solid #ccc");
    });

    $('.sb-color').click(function(){
        $('.wc').css("display","none").fadeOut();
        $('.sg').css("display","none").fadeOut();
        $('.mc').css("display","none").fadeOut();
        $('.tb').css("display","none").fadeOut();
        $('.sb').fadeIn();
        $('.rf').css("display","none").fadeOut();

        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "block");
        $('.rf-txt').css("display", "none");

        $('.wc-color').css("border", "1px solid #ccc");
        $('.sg-color').css("border", "1px solid #ccc");
        $('.mc-color').css("border", "1px solid #ccc");
        $('.tb-color').css("border", "1px solid #ccc");
        $('.sb-color').css("border", "3px solid #ccc");
        $('.rf-color').css("border", "1px solid #ccc");
    });

    $('.rf-color').click(function(){
        $('.wc').css("display","none").fadeOut();
        $('.sg').css("display","none").fadeOut();
        $('.mc').css("display","none").fadeOut();
        $('.tb').css("display","none").fadeOut();
        $('.sb').css("display","none").fadeOut();
        $('.rf').fadeIn();

        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "block");

        $('.wc-color').css("border", "1px solid #ccc");
        $('.sg-color').css("border", "1px solid #ccc");
        $('.mc-color').css("border", "1px solid #ccc");
        $('.tb-color').css("border", "1px solid #ccc");
        $('.sb-color').css("border", "1px solid #ccc");
        $('.rf-color').css("border", "3px solid #ccc");
    });
});


// var myswiper = new swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

// new Swiper('.swiper-container');