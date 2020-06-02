$(function(){
    $(".main-menu").mouseover(function(){
        $(".sub-menu").css("display", "flex");
        $(".sub-menu").slideDown().stop();
    });

    $(".menu").mouseleave(function(){
        $(".sub-menu").slideUp();
    });
});

$(function(){
    $("#m1-1").mouseover(function(){
        $("#m1-1").css("background", "orange");
        $("#m1").css("background", "orange");
    });
    $("#m1-1").mouseleave(function(){
        $("#m1-1").css("background", "#fff");
        $("#m1").css("background", "#fff");
    });

    $("#m1-2").mouseover(function(){
        $("#m1-2").css("background", "orange");
        $("#m1").css("background", "orange");
    });
    $("#m1-2").mouseleave(function(){
        $("#m1-2").css("background", "#fff");
        $("#m1").css("background", "#fff");
    });
   
    $("#m1-3").mouseover(function(){
        $("#m1-3").css("background", "orange");
        $("#m1").css("background", "orange");
    });
    $("#m1-3").mouseleave(function(){
        $("#m1-3").css("background", "#fff");
        $("#m1").css("background", "#fff");
    });

    $("#m1-4").mouseover(function(){
        $("#m1-4").css("background", "orange");
        $("#m1").css("background", "orange");
    });
    $("#m1-4").mouseleave(function(){
        $("#m1-4").css("background", "#fff");
        $("#m1").css("background", "#fff");
    });





    $("#m2-1").mouseover(function(){
        $("#m2-1").css("background", "orange");
        $("#m2").css("background", "orange");
    });
    $("#m2-1").mouseleave(function(){
        $("#m2-1").css("background", "#fff");
        $("#m2").css("background", "#fff");
    });

    $("#m2-2").mouseover(function(){
        $("#m2-2").css("background", "orange");
        $("#m2").css("background", "orange");
    });
    $("#m2-2").mouseleave(function(){
        $("#m2-2").css("background", "#fff");
        $("#m2").css("background", "#fff");
    });
    
    $("#m2-3").mouseover(function(){
        $("#m2-3").css("background", "orange");
        $("#m2").css("background", "orange");
    });
    $("#m2-3").mouseleave(function(){
        $("#m2-3").css("background", "#fff");
        $("#m2").css("background", "#fff");
    });
  
    $("#m2-4").mouseover(function(){
        $("#m2-4").css("background", "orange");
        $("#m2").css("background", "orange");
    });
    $("#m2-4").mouseleave(function(){
        $("#m2-4").css("background", "#fff");
        $("#m2").css("background", "#fff");
    });




    
    $("#m3-1").mouseover(function(){
        $("#m3-1").css("background", "orange");
        $("#m3").css("background", "orange");
    });
    $("#m3-1").mouseleave(function(){
        $("#m3-1").css("background", "#fff");
        $("#m3").css("background", "#fff");
    });

    $("#m3-2").mouseover(function(){
        $("#m3-2").css("background", "orange");
        $("#m3").css("background", "orange");
    });
    $("#m3-2").mouseleave(function(){
        $("#m3-2").css("background", "#fff");
        $("#m3").css("background", "#fff");
    });

    $("#m3-3").mouseover(function(){
        $("#m3-3").css("background", "orange");
        $("#m3").css("background", "orange");
    });
    $("#m3-3").mouseleave(function(){
        $("#m3-3").css("background", "#fff");
        $("#m3").css("background", "#fff");
    });

    $("#m3-4").mouseover(function(){
        $("#m3-4").css("background", "orange");
        $("#m3").css("background", "orange");
    });
    $("#m3-4").mouseleave(function(){
        $("#m3-4").css("background", "#fff");
        $("#m3").css("background", "#fff");
    });




    $("#m4-1").mouseover(function(){
        $("#m4-1").css("background", "orange");
        $("#m4").css("background", "orange");
    });
    $("#m4-1").mouseleave(function(){
        $("#m4-1").css("background", "#fff");
        $("#m4").css("background", "#fff");
    });

    $("#m4-2").mouseover(function(){
        $("#m4-2").css("background", "orange");
        $("#m4").css("background", "orange");
    });
    $("#m4-2").mouseleave(function(){
        $("#m4-2").css("background", "#fff");
        $("#m4").css("background", "#fff");
    });

    $("#m4-3").mouseover(function(){
        $("#m4-3").css("background", "orange");
        $("#m4").css("background", "orange");
    });
    $("#m4-3").mouseleave(function(){
        $("#m4-3").css("background", "#fff");
        $("#m4").css("background", "#fff");
    });

    $("#m4-4").mouseover(function(){
        $("#m4-4").css("background", "orange");
        $("#m4").css("background", "orange");
    });
    $("#m4-4").mouseleave(function(){
        $("#m4-4").css("background", "#fff");
        $("#m4").css("background", "#fff");
    });



});




setInterval(function(){
    $(".slide-img").delay("2000");
    $(".slide-img").animate({marginTop:"-300px"},"500");
    $(".slide-img").delay("2000");
    $(".slide-img").animate({marginTop:"-600px"},"500");
    $(".slide-img").delay("2000");
    $(".slide-img").animate({marginTop:"0"},"500");
});



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




$(function(){
    $(".popup-open").click(function(){
        $(".popup").fadeIn();
    });

    $(".popup-btn").click(function(){
        $(".popup").fadeOut();
    });
});