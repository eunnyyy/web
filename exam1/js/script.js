// $(function(){
//     $(".mainNav").mouseover(function(){
//         $('.subNav').css("display","flex");
//         $(".subNav").stop().slideDown(500);
//     });
//     $(".mainNav").mouseout(function(){
//         $(".subNav").stop().slideUp(500);
//     });
// });



$(function(){
    $(".menu").mouseover(function(){
        $(".subNav").css("display","flex");
        $(".subNav").stop().slideDown();
    });
    $(".menu").mouseleave(function(){
        $(this).children(".subNav").stop().slideUp();
    });
});

// slide
setInterval(function(){
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop:"-300px"},"500");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop:"-600px"},"500");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop:"0"},"500");
})