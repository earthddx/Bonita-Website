/*=================================================================
                        WOW JS
=================================================================*/
$(function () {
    new WOW().init();
});


/*=================================================================
                        NAVIGATION
=================================================================*/
//Show / Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide
            $("nav").removeClass("bonita-top-nav");
            $('#back-to-top').fadeOut()
        } else {
            //show nav
            $("nav").addClass("bonita-top-nav");
            $("#back-to-top").fadeIn();
        };

    });

});


$(function () {

    $('a.scroll').click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 100
        }, 1250, "easeInOutExpo")

    });

});


/*=================================
                OWL CAROUSEL
===================================*/
$(document).ready(function () {
    $(".partners__content-box--carousel").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2

            },
            // breakpoint from 768 up
            768: {
                items: 4
            },

        }
    });
});

/*=================================
                MOBILE NAV
===================================*/
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

/*=================================
                MODAL
===================================*/
var btnWorker1 = document.querySelector('.worker-1');
var btnWorker2 = document.querySelector('.worker-2');
var btnWorker3 = document.querySelector('.worker-3');

var modalWorker1 = document.querySelectorAll('.modal')[0];
var modalWorker2 = document.querySelectorAll('.modal')[1];
var modalWorker3 = document.querySelectorAll('.modal')[2];
var modalWorker4 = document.querySelectorAll('.modal')[3];


var modalWork = document.querySelector('.modal-work');
var myBtn = document.querySelector('.my-btn');

var modalArray = [modalWorker1, modalWorker2, modalWorker3];

var backdrop = document.querySelector('.backdrop');

function openCloseModal(btn, modal) {
    $(btn).on('click', function(){
        $(modal).addClass('open');
        $(modal).css('z-index', 1001);
        $('#modal-backdrop').fadeIn().show();        
        
        $('.fa-times').off().on('click', function() {
            $(modal).removeClass('open');
            $('#modal-backdrop').fadeOut().hide('slow');
            $(modal).css('z-index', -1);
        })
        
        $('#modal-backdrop').off().on('click', function(){
            $(modal).removeClass('open');
            $('#modal-backdrop').fadeOut().hide('slow');
            $(modal).css('z-index', -1);
        });
    });
}


openCloseModal(btnWorker1, modalWorker1);
openCloseModal(btnWorker2, modalWorker2);
openCloseModal(btnWorker3, modalWorker3);
openCloseModal(myBtn, modalWorker4);

$('#menu-button').on('click', function() {
    $('.page-menu').toggle();
    if($('#page-menu').is(':visible')) {
        $('#page-backdrop').fadeIn();
    } else {
        $('#page-backdrop').fadeOut();
    }
});

