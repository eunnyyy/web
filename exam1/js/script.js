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

    
    $(".mainNav").mouseover(function(){
        $(this).children().css("background", "green");
    })
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


//tab
$(function(){
    $(".tab-btn1").click(function(){
        $(".tab-con1").css("display", "flex");
        $(".tab-con2").css("display", "none");
        $(".tab-btn1").css("background", "#fff");
        $(".tab-btn2").css("background", "lightseagreen");
        $(".tab-con1").css("background", "#fff");
        $(".tab-con2").css("background", "none");
    });
    $(".tab-btn2").click(function(){
        $(".tab-con1").css("display", "none");
        $(".tab-con2").css("display", "flex");
        $(".tab-btn1").css("background", "lightseagreen");
        $(".tab-btn2").css("background", "#fff");
        $(".tab-con1").css("background", "none");
        $(".tab-con2").css("background", "#fff");
        
    });
});

$(function(){
    $("#popup_button").on('click', function(){
        $('.popup').fadeIn();
    });
    $(".팝업닫기").on('click', function(){
        $('.popup').fadeOut();
    });
});