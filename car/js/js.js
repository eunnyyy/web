$(function(){
    $('.wc').click(function(){
        $('#wc').fadeIn();
        $('#sg').css("display","none").fadeOut();
        $('#mc').css("display","none").fadeOut();
        $('#tb').css("display","none").fadeOut();
        $('#sb').css("display","none").fadeOut();
        $('#rf').css("display","none").fadeOut();

        $('.wc-txt').css("display", "block");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "none");

        $('.wc').css("border", "3px solid #ccc");
        $('.sg').css("border", "1px solid #ccc");
        $('.mc').css("border", "1px solid #ccc");
        $('.tb').css("border", "1px solid #ccc");
        $('.sb').css("border", "1px solid #ccc");
        $('.rf').css("border", "1px solid #ccc");
    });

    $('.sg').click(function(){
        $('#wc').css("display","none").fadeOut();
        $('#sg').fadeIn();
        $('#mc').css("display","none").fadeOut();
        $('#tb').css("display","none").fadeOut();
        $('#sb').css("display","none").fadeOut();
        $('#rf').css("display","none").fadeOut();

        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "block");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "none");

        $('.wc').css("border", "1px solid #ccc");
        $('.sg').css("border", "3px solid #ccc");
        $('.mc').css("border", "1px solid #ccc");
        $('.tb').css("border", "1px solid #ccc");
        $('.sb').css("border", "1px solid #ccc");
        $('.rf').css("border", "1px solid #ccc");
    });

    $('.mc').click(function(){
        $('#wc').css("display","none").fadeOut();
        $('#sg').css("display","none").fadeOut();
        $('#mc').fadeIn();
        $('#tb').css("display","none").fadeOut();
        $('#sb').css("display","none").fadeOut();
        $('#rf').css("display","none").fadeOut();    
        
        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "block");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "none");

        $('.wc').css("border", "1px solid #ccc");
        $('.sg').css("border", "1px solid #ccc");
        $('.mc').css("border", "3px solid #ccc");
        $('.tb').css("border", "1px solid #ccc");
        $('.sb').css("border", "1px solid #ccc");
        $('.rf').css("border", "1px solid #ccc");
    });

    $('.tb').click(function(){
        $('#wc').css("display","none").fadeOut();
        $('#sg').css("display","none").fadeOut();
        $('#mc').css("display","none").fadeOut();
        $('#tb').fadeIn();
        $('#sb').css("display","none").fadeOut();
        $('#rf').css("display","none").fadeOut();  
        
        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "block");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "none");

        $('.wc').css("border", "1px solid #ccc");
        $('.sg').css("border", "1px solid #ccc");
        $('.mc').css("border", "1px solid #ccc");
        $('.tb').css("border", "3px solid #ccc");
        $('.sb').css("border", "1px solid #ccc");
        $('.rf').css("border", "1px solid #ccc");
    });

    $('.sb').click(function(){
        $('#wc').css("display","none").fadeOut();
        $('#sg').css("display","none").fadeOut();
        $('#mc').css("display","none").fadeOut();
        $('#tb').css("display","none").fadeOut();
        $('#sb').fadeIn();
        $('#rf').css("display","none").fadeOut();

        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "block");
        $('.rf-txt').css("display", "none");

        $('.wc').css("border", "1px solid #ccc");
        $('.sg').css("border", "1px solid #ccc");
        $('.mc').css("border", "1px solid #ccc");
        $('.tb').css("border", "1px solid #ccc");
        $('.sb').css("border", "3px solid #ccc");
        $('.rf').css("border", "1px solid #ccc");
    });

    $('.rf').click(function(){
        $('#wc').css("display","none").fadeOut();
        $('#sg').css("display","none").fadeOut();
        $('#mc').css("display","none").fadeOut();
        $('#tb').css("display","none").fadeOut();
        $('#sb').css("display","none").fadeOut();
        $('#rf').fadeIn();

        $('.wc-txt').css("display", "none");
        $('.sg-txt').css("display", "none");
        $('.mc-txt').css("display", "none");
        $('.tb-txt').css("display", "none");
        $('.sb-txt').css("display", "none");
        $('.rf-txt').css("display", "block");

        $('.wc').css("border", "1px solid #ccc");
        $('.sg').css("border", "1px solid #ccc");
        $('.mc').css("border", "1px solid #ccc");
        $('.tb').css("border", "1px solid #ccc");
        $('.sb').css("border", "1px solid #ccc");
        $('.rf').css("border", "3px solid #ccc");
    });
});