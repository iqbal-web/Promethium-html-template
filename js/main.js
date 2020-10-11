(function ($) {
"use strict";


    // meanmenu
    $('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu-active'
    });



    // slider - active
    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
        // Testi-slider
        $('.testimonial-active').owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                767: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })


})(jQuery);