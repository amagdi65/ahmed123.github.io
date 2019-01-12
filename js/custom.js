/*global $ , alert, console*/
$(function () {
    
    "use strict";
    //adjust header height
    $("header").height($(window).height());
    $(window).resize(function () {
        
        $("header").height($(window).height());
        $(".slider").each(function () {
            $(this).css('paddingTop', ($(window).height() - $(".slider li").height()) / 2);
        });
        
    });
    //adjust links
    $("nav ul li").on("click", function () {
        
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //traggle bxslider
    $(".slider").each(function () {
        $(this).css('paddingTop', ($(window).height() - $(".slider li").height()) / 2);
    });
    $('.slider').bxSlider({pager: false});
    //animate scroll
    $('nav ul li').click(function () {
        $('html,body').animate({
           
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    //auto slider
    (function slide() {
        
        $(".slider2 .act").each(function () {
            if (!$(this).is(":last-child")) {
                
                $(this).delay(3000).fadeOut(2000, function () {
                    $(this).removeClass("act").next().addClass("act").fadeIn(3000);
                    slide();
                });
                
                

            } else {
                $(this).delay(3000).fadeOut(2000, function () {
                    $(this).removeClass("act");
                    $(".slider2 div:first-child").addClass("act").fadeIn(3000);
                    slide();
                    
                });
            }
            
        });
        
        
    }());
    //traggle shuffle
    var mixer = mixitup('#cont');
    
    //adjust buttom
    $("#port button").on("click", function () {
        
        $(this).addClass('active').siblings().removeClass('active');
    });
    //trigger nice scroll
    $("html").niceScroll(
        {
            cursorcolor: "#1CB596",
            cursorwidth:"10px",
            cursorborder: "1px solid #000"
        });
    

    
    
    
     
});