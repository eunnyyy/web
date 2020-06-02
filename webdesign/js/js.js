$(function(){
    $(".main-menu").mouseover(function(){
        $(".sub-menu").css("display", "flex");
        $(".sub-menu").slideDown().stop();
    });

    $(".menu").mouseleave(function(){
        $(".sub-menu").slideUp().stop();
    });
});




// setInterval(function(){
//     $(".slide-img").delay(2500);
//     $(".slide-img").animate({marginTop,"-300"},"500");
//     $(".slide-img").delay(2500);
//     $(".slide-img").animate({marginTop,"-600"},"500");
//     $(".slide-img").delay(2500);
//     $(".slide-img").animate({marginTop,"0"},"500");
// });



$(function(){
    $(".tab-btn1").click(function(){
        $(".tab-btn1").css("background", "#fff");
        $(".tab-btn2").css("background", "#ccc");
        $(".tab-box1").css("display", "block");
        $(".tab-box2").css("display", "none");
        $(".tab-box1").css("background", "#fff");
    });

    $(".tab-btn2").click(function(){
        $(".tab-btn2").css("background", "#fff");
        $(".tab-btn1").css("background", "#ccc");
        $(".tab-box2").css("display", "flex");
        $(".tab-box1").css("display", "none");
        $(".tab-box2").css("background", "#fff");
    });
});