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




$(function(){
    $('.safe1-btn').click(function(){
        $('.safe1').fadeIn();
        $('.safe2').css("display","none").fadeOut();
        $('.safe3').css("display","none").fadeOut();

        $('.safe1-txt').css("display", "block");
        $('.safe2-txt').css("display", "none");
        $('.safe3-txt').css("display", "none");

        $('.safe1-btn>a').css("color", "#012d5e");
        $('.safe2-btn>a').css("color", "#000");
        $('.safe3-btn>a').css("color", "#000");

        $('.safe1-btn>a').css("font-weight", "600");
        $('.safe2-btn>a').css("font-weight", "500");
        $('.safe3-btn>a').css("font-weight", "500");

        $('.safe1-btn').css("border-bottom", "2px solid #012d5e");
        $('.safe2-btn').css("border-bottom","2px solid #fff");
        $('.safe3-btn').css("border-bottom","2px solid #fff");
    });

    $('.safe2-btn').click(function(){
        $('.safe1').css("display","none").fadeOut();
        $('.safe2').fadeIn();
        $('.safe3').css("display","none").fadeOut();

        $('.safe1-txt').css("display", "none");
        $('.safe2-txt').css("display", "block");
        $('.safe3-txt').css("display", "none");

        $('.safe1-btn>a').css("color", "#000");
        $('.safe2-btn>a').css("color", "#012d5e");
        $('.safe3-btn>a').css("color", "#000");

        $('.safe1-btn>a').css("font-weight", "500");
        $('.safe2-btn>a').css("font-weight", "600");
        $('.safe3-btn>a').css("font-weight", "500");

        $('.safe1-btn').css("border-bottom", "2px solid #fff");
        $('.safe2-btn').css("border-bottom","2px solid #012d5e");
        $('.safe3-btn').css("border-bottom","2px solid #fff");
    });

    $('.safe3-btn').click(function(){
        $('.safe1').css("display","none").fadeOut();
        $('.safe2').css("display","none").fadeOut();
        $('.safe3').fadeIn();

        $('.safe1-txt').css("display", "none");
        $('.safe2-txt').css("display", "none");
        $('.safe3-txt').css("display", "block");

        $('.safe1-btn>a').css("color", "#000");
        $('.safe2-btn>a').css("color", "#000");
        $('.safe3-btn>a').css("color", "#012d5e");

        $('.safe1-btn>a').css("font-weight", "500");
        $('.safe2-btn>a').css("font-weight", "500");
        $('.safe3-btn>a').css("font-weight", "600");

        $('.safe1-btn').css("border-bottom", "2px solid #fff");
        $('.safe2-btn').css("border-bottom","2px solid #fff");
        $('.safe3-btn').css("border-bottom","2px solid #012d5e");
    });
});