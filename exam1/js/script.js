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