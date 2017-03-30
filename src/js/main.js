function scrollWindowNavigationFixedLarge() {
    var countScroll = $(window).scrollTop(),
        navigationBlock = $(".header__fixed"),
        body = $("body");

    if (countScroll > 150) {
        body.addClass("fixed");
        navigationBlock.addClass("slideInDown");
    } else {
        body.removeClass("fixed");
        navigationBlock.removeClass("slideInDown");
    }
}


$(window).on("load resize ready scroll", function(){
    if($(window).width() > '1024') {
        scrollWindowNavigationFixedLarge();
    } else {
        $("body").removeClass("fixed");
        $(".header__fixed").removeClass("slideInDown");
    }
});


$(document).ready(function(){


    /* LOGO CLICK SCROLL TO TOP */
    $(".logotype").on("click", function(e) {
        $('body,html').animate(
            {
                scrollTop: 0
            }, 1000
        );
    });


    /* LANG */
    $(".language__btn").on("click", function(){
        $(".language__btn").removeClass("active");
        $(this).addClass("active");
    });


    /* PARTNER */
    $(".partner__carousel").owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            300: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });


    /* CLIENT SLIDER */
    $(".client__carousel").owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            300: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });


    /* CASE CAROUSEL */
    $(".case__left-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true
    })
    $(".case__row").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav:true
    });


    /* FEEDBACK */
    $(".feedback__input").on("focus", function(){
        $(this).closest(".feedback__field").addClass("feedback_filled");
    });
    $(".feedback__input").on("blur", function(){
        var inputVal = $(this).val();

        if(!inputVal.length > 0) {
            $(this).closest(".feedback__field").removeClass("feedback_filled");
        }
    });


    /* BTN BURGER */
    $(".btn__burger").on("click", function(){
        $(".btn__burger").toggleClass("active");

        $("body, html").toggleClass("open-menu");
        $(".menu").toggleClass("zoomIn");
    });


    /* SMOOTH SCROLL */
    $(".nav a, .header__scroll").on("click", function (e) {
        e.preventDefault();

        var id          = $(this).attr('href'),
            navHeight   = $(".header__fixed").outerHeight(),
            top         = $(id).offset().top - navHeight;

        $('body, html').animate({
            scrollTop: top
        }, 1000);

        $(".btn__burger").removeClass("active");
        $("body, html").removeClass("open-menu");
        $(".menu").removeClass("zoomIn");
    });


    /* ANIMATION - VIEW PORT CHECK PAGE */
    if($(window).width() > '767') {
        var classNameSection    =  ".partner .container, .client .container, .case .container, " +
            ".contacts .container, .feedback .container, .insights .container";

        $(classNameSection).addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInUp',
                classToRemove : 'hidden',
                removeClassAfterAnimation: true
            }
        );
        $(".header__сoordinate-axis").addClass('hidden').viewportChecker({
                classToAdd: 'visible animated fadeIn slideInUp',
                classToRemove : 'hidden',
                removeClassAfterAnimation: true
            }
        );
        $(".header__dynamic").addClass('hidden').viewportChecker({
                classToAdd: 'visible animated fadeIn',
                classToRemove : 'hidden',
                removeClassAfterAnimation: true
            }
        );
        $(".services .container").addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInUp',
                classToRemove : 'hidden'
                // , removeClassAfterAnimation: true
                , callbackFunction: function(){
                    setTimeout(function(){
                        $(".services__text-0").removeClass("hidden").addClass("visible animated slideInLeft");
                    }, 0);
                    setTimeout(function(){
                        $(".services__text-1").removeClass("hidden").addClass("visible animated slideInLeft");
                    }, 1000);
                    setTimeout(function(){
                        $(".services__text-2").removeClass("hidden").addClass("visible animated slideInLeft");
                    }, 2000);
                    setTimeout(function(){
                        $(".services__text-3").removeClass("hidden").addClass("visible animated slideInLeft");
                    }, 3000);
                    setTimeout(function(){
                        $(".services__text-4").removeClass("hidden").addClass("visible animated slideInLeft");
                    }, 4000);
                    setTimeout(function(){
                        $(".services__text-5").removeClass("hidden").addClass("visible animated slideInLeft");
                    }, 5000);
                }
            }
        );
        // $(".btn__square-0").viewportChecker({
        //         callbackFunction: function() {
        //             setTimeout(function(){
        //                 $(".btn__square-0").addClass("active");
        //             }, 500);
        //         }
        //     }
        // );
        // $(".btn__square-1").viewportChecker({
        //         callbackFunction: function() {
        //             setTimeout(function(){
        //                 $(".btn__square-1").addClass("active");
        //             }, 1000);
        //         }
        //     }
        // );
        // $(".btn__square-2").viewportChecker({
        //         callbackFunction: function() {
        //             setTimeout(function(){
        //                 $(".btn__square-2").addClass("active");
        //             }, 0);
        //         }
        //     }
        // );
        // $(".btn__square-3").viewportChecker({
        //         callbackFunction: function() {
        //             setTimeout(function(){
        //                 $(".btn__square-3").addClass("active");
        //             }, 1500);
        //         }
        //     }
        // );
        $(".only .container").addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInUp',
                classToRemove : 'hidden',
                removeClassAfterAnimation: true,
                callbackFunction: function(){
                    setTimeout(function(){
                        $(".only__count").addClass("only__count--active");
                        $(".only__count--num").countTo({
                            speed: 1500,
                            onComplete: function () {
                                $(".only__img").removeClass("infinite");
                                $(".only__count").removeClass("only__count--active");
                            }
                        });
                    }, 500);
                }
            }
        );
    }

    /* ADD TMPL IN ONLY SECTION */
    var onlyTMPL = '<img src="./image/img-dynamic.png" title="" alt="" class="only__dynamic">' +
        '<svg id="only-header" data-name="only-header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921 474.8">' +
        '<linearGradient id="linear-gradient-0" x1="0%" y1="0%" x2="0%" y2="100%">' +
        '<stop offset="0%" stop-color="#ff00ff" stop-opacity="0.6"></stop>' +
        '<stop offset="100%" stop-color="#ff00ff" stop-opacity="0"></stop></linearGradient><linearGradient id="linear-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">' +
        '<stop offset="0%" stop-color="#00ffff" stop-opacity="0.6"></stop><stop offset="100%" stop-color="#00ffff" stop-opacity="0"></stop></linearGradient>' +
        '<g id="only-header-bg"><path data-name="only-bg" d="M0,261c2.3,4.4,5.6,10.1,9.7,16.7a210.8,210.8,0,0,0,15,21.3,170,170,0,0,0,19,20.3A144.5,144.5,0,0,0,65,335.7c6.1,3.8,13.5,8.4,24.3,12a109.4,109.4,0,0,0,26.3,5c5.7.4,14.9.7,32.3-2,10.1-1.5,20.3-3.6,44.7-10.3,22.7-6.2,23.9-7.2,45-13,18.8-5.2,30.3-8.4,46-11.7a492.6,492.6,0,0,1,51.7-8c7.8-.8,22.8-2,59.7-2,27,0,48.7.1,78,2A900.6,900.6,0,0,1,574.3,320c23.4,4.3,55,10.3,94.7,23.3,35.7,11.8,71.1,27,75.7,29,13.8,6,30.7,13.7,56.7,23.3,17.8,6.6,28.4,9.8,32.3,11a382.5,382.5,0,0,0,49,11.7,401.3,401.3,0,0,0,45,4.7c17,1,29.7,1,45.3,1,11,0,28.9-.2,51.7-1.3,35.9-1.7,65.3-4.8,84-7,30.2-3.6,51.8-7.3,79-12,36.2-6.2,41.1-8,89-16.3,34.8-6,48.3-7.9,63.7-9.3,21.9-2,38.7-2.4,53.7-2.7,13.1-.2,40.4-.5,76,1.7,44.1,2.7,77.4,7.5,98.3,10.7,18.9,2.8,51,7.6,91.3,16.7,23.8,5.3,47.9,9.3,71.7,14.7a198.5,198.5,0,0,0,28,4.3,190.3,190.3,0,0,0,27.3.3,202.1,202.1,0,0,0,33.7-5.3c9.3-2.2,17.3-5,33.3-10.7,19-6.7,15.3-6.1,45.3-18.3a65.9,65.9,0,0,0,13.7-7.3,64.5,64.5,0,0,0,7.3-6V0H0Z" transform="translate(0.5 0.5)" class="only-bg"></path></g>' +
        '<g id="line-purple"><path fill="url(#linear-gradient-0)" d="M0,56A150.4,150.4,0,0,0,10,71.5c3.9,5.3,6.9,9.4,12,14a65.7,65.7,0,0,0,12.5,9c4,2.2,6.8,3.7,11,4.5s6.6-.4,11,.5,8.1,3.6,11,6c7,5.7,14.3,11,21,17A282.7,282.7,0,0,0,111,141c13.7,10,23.4,14.5,28,16.5,9.4,4.1,15,5.1,17.5,5.5a49.3,49.3,0,0,0,18.5,0c7.9-1.6,13.4-5.1,20.5-9.5,2.8-1.8,5.3-5.2,10.5-7.5a20,20,0,0,1,7-2c5.5-.4,9.9,2.4,13,4.5,13.2,8.9,20,16,20,16,7.9,8.3,11.3,12.5,22.5,25.5,7.8,9,13.7,15.6,19.5,22,11.4,12.5,14.9,15.6,16.5,17,8.1,7.1,13.6,10.3,21.5,15a37.3,37.3,0,0,0,10.5,4.5c2.9.7,4.7.4,9.5,1a64.1,64.1,0,0,1,8,1.5c5,1.4,7.9,3.6,14,8l13.5,9.5c8.9,6.4,7,4.9,19,13.5s13.1,9.6,19.5,14,11.3,7.6,14.7,9.7H418l-12.2-.2-16-.5c-7.2-.2-12.3-.1-19.3,0-2.2,0-22.1,1.1-35.8,2.7-36.5,4.1-51.6,8.5-78.2,14.8-7.1,1.7-17.2,4.8-26.2,7.3l-28.7,8c-17.1,4.8-26.7,7.1-31.7,8.3-12,2.9-19.6,5.1-31.3,6.3-7.3.7-15.1,1.9-24.7,1-19.4-1.8-36.6-10-40.1-11.8-18.3-9.3-29.5-21.5-40.7-33.1-9.6-10-21.5-25.4-33.2-47Z" transform="translate(0.5 0.5)" class="line-purple-bg-0"></path>' +
        '<path fill="url(#linear-gradient-0)" d="M887.3,419.3c-.1-1.2,5.8-1.7,17.3-5.3s18.4-7.1,27.7-11.7c12.6-6.2,21.2-11.5,34.3-19.7,4.2-2.6,17.8-11.2,36-24,7.1-5,4.5-3.4,31-22.7,0,0,11.7-8.6,30.3-21.3,2-1.3,8.5-5.2,21.7-13a49.1,49.1,0,0,1,12-5.3,46,46,0,0,1,9.3-1.7,47.9,47.9,0,0,1,17.7,2.3c9.4,2.8,16.4,6.3,24.3,10.3,12.8,6.5,19.2,9.8,29.7,15.7,8,4.5,8,4.6,26.7,15.3l26.3,15c17.7,10,24.2,13.4,26.7,14.7,9.5,5,16.4,8.3,19.3,9.7,6,2.8,11.2,5.2,15.3,7l-5.7,1.2c-3,.5-7,1.5-11.9,2.4,0,0-13.1,2.8-25.4,5-18,3.2-35,6.6-44.7,8.5-26.7,5.3-47.9,8.5-62,10.5s-41.6,5.5-76.4,8.3c-31.8,2.6-56.9,4.2-64.6,4.5-5.8.2-26.7.4-54.7-.1C932,424.8,887.5,422.7,887.3,419.3Z" transform="translate(0.5 0.5)" class="line-purple-bg-1"></path>' +
        '<path fill="url(#linear-gradient-0)" d="M1469,376.7c-.2-1.5,7.9-3.5,27-10.7l8.2-3.2,42.4-15.8c14.4-5.4,28.9-10.3,43.3-15.7,0,0,11.2-4.2,32-9a58.2,58.2,0,0,1,12.7-1.7,61.2,61.2,0,0,1,16,2,71.9,71.9,0,0,1,16.7,6.7c19.4,10.3,29.7,17.3,29.7,17.3,13.3,9.2,27.1,17.6,40.3,27,15.9,11.2,37.8,26.7,68,47.7l-5.1,1-8.1,1.4c-1.9.3-6.9,1-12.5,1.3a105.1,105.1,0,0,1-17-.7c-19-2.1-32.3-5-32.3-5-15.9-3.5-31.8-6.5-47.7-10s-36.7-8-63.7-13c-12.4-2.3-29.3-5.4-52-8.7-8.1-1.2-38.6-5.6-61-7.3-8.5-.7-16.9-1.9-25.3-2.3S1469.2,377.7,1469,376.7Z" transform="translate(0.5 0.5)" class="line-purple-bg-2"></path>' +
        '<path d="M0,56A150.4,150.4,0,0,0,10,71.5c3.9,5.3,6.9,9.4,12,14a65.7,65.7,0,0,0,12.5,9c4,2.2,6.8,3.7,11,4.5s6.6-.4,11,.5,8.1,3.6,11,6c7,5.7,14.3,11,21,17A282.7,282.7,0,0,0,111,141c13.7,10,23.4,14.5,28,16.5,9.4,4.1,15,5.1,17.5,5.5a49.3,49.3,0,0,0,18.5,0c7.9-1.6,13.4-5.1,20.5-9.5,2.8-1.8,5.3-5.2,10.5-7.5a20,20,0,0,1,7-2c5.5-.4,9.9,2.4,13,4.5,13.2,8.9,20,16,20,16,7.9,8.3,11.3,12.5,22.5,25.5,7.8,9,13.7,15.6,19.5,22,11.4,12.5,14.9,15.6,16.5,17,8.1,7.1,13.6,10.3,21.5,15a37.3,37.3,0,0,0,10.5,4.5c2.9.7,4.7.4,9.5,1a64.1,64.1,0,0,1,8,1.5c5,1.4,7.9,3.6,14,8l13.5,9.5c8.9,6.4,7,4.9,19,13.5s13.3,9.8,19.5,14,12.3,8.2,16,10.5" transform="translate(0.5 0.5)" class="line-purple line-purple-0"></path>' +
        '<path d="M887.3,419.3c4.6-1.2,10.5-2.9,17.3-5.3a252.5,252.5,0,0,0,27.7-11.7c12.6-6.2,21.2-11.5,34.3-19.7,4.2-2.6,17.8-11.2,36-24,7.1-5,4.5-3.4,31-22.7,0,0,11.7-8.6,30.3-21.3,2-1.3,8.5-5.2,21.7-13a49.1,49.1,0,0,1,12-5.3,46,46,0,0,1,9.3-1.7,47.9,47.9,0,0,1,17.7,2.3c9.4,2.8,16.4,6.3,24.3,10.3,12.8,6.5,19.2,9.8,29.7,15.7,8,4.5,8,4.6,26.7,15.3l26.3,15c17.7,10,24.2,13.4,26.7,14.7,9.5,5,16.4,8.3,19.3,9.7s8.9,4.2,15.3,7,14.1,6.1,26,10c8.6,2.8,16.1,5.4,26.7,7.3a147.8,147.8,0,0,0,18,2.3c15.2.9,26.4-2,46.7-7.3a396.5,396.5,0,0,0,39-12.7l19.7-7.7,27-10.7,8.2-3.2c14.2-5.4,27.3-10.4,42.4-15.8s27.2-9.4,43.3-15.7h0a172.5,172.5,0,0,1,32-9c5.9-1.1,8.8-1.6,12.7-1.7a61.2,61.2,0,0,1,16,2c5.8,1.5,9.6,3.3,16.7,6.7a236.5,236.5,0,0,1,29.7,17.3h0l28.5,18.9,11.8,8.1c31.2,21.5,64.3,45.1,68,47.7l20.3,14.3c17.3,12.1,21.8,15.1,26,17.7,11.7,7.3,6.9,3.4,23.7,13.3,4.6,2.7,8.6,5.1,14.7,6.3a31.3,31.3,0,0,0,13.7,0,31,31,0,0,0,16.3-10.3" transform="translate(0.5 0.5)" class="line-purple line-purple-1"></path></g>' +
        '<g id="line-aqua"><path fill="url(#linear-gradient-1)" d="M0,0C.7,8.9,1.9,20.1,4,33s4.9,26.5,7.7,37.3c4.1,16.3,7.8,30.8,15.7,46.3,2.7,5.4,5.8,9.8,12,18.7,3.4,4.9,6.1,8.3,10.7,11a30.7,30.7,0,0,0,9,3.3,27.5,27.5,0,0,0,10.7.3c4-.7,6.9-2.4,12-6A161.5,161.5,0,0,0,97,132c3.2-2.9,8.9-8.4,20.3-21,6-6.6,12.6-12.8,18.3-19.7A39.3,39.3,0,0,1,148.3,81a21.3,21.3,0,0,1,7-2.3c1.3-.2,5.9-.6,13.3,3.3s11.3,8.7,17,15.3c1.1,1.3,3.3,3.9,9.3,12.3,4.1,5.8,8.1,11.3,13,18.7,6.3,9.6,12.2,19.3,18.3,30.3,10.9,19.6,10.8,22,23.3,46.3,11.3,21.9,11,19.2,25,46,7.5,14.3,10.7,21.1,17.7,33s12.9,20.8,17,26.7l-11,1.7L285.2,315c-2.4.5-10,2.1-19.2,4.3s-20.8,5.3-34.5,9.2c-22.3,6.4-20.4,6.5-38,11.5s-28.7,8.1-44.5,10.5c-11.4,1.7-17.6,2.7-26.5,2.5A112.7,112.7,0,0,1,78,343c-12.9-6-21.2-13-29-19.5-11.6-9.7-18.9-18.6-25-26a247.7,247.7,0,0,1-24-35Z" transform="translate(0.5 0.5)" class="line-aqua-bg-0"></path> ' +
        '<path fill="url(#linear-gradient-1)" d="M1514,380.5c.5-1.8-11.2-6.9-19-9.5a95.1,95.1,0,0,0-13.5-3.5,97.3,97.3,0,0,0-17-1.5c-9-.1-17.5-2.1-34.5-6a372.4,372.4,0,0,1-42-12.5c-19.9-6.9-23.6-9.6-44-16-11.3-3.6-18.3-5.3-26.5-6.5a109.3,109.3,0,0,0-27.5-1c-9.4.9-16,3-24,5.5-41.6,13-25.7,7.2-47.5,14.5-4.3,1.4-21,7-47.5,16.5-22.7,8.1-26.2,9.6-42,15-24.5,8.3-34.3,10.8-45.5,12.5a177.9,177.9,0,0,1-26,2c-12.2,0-22.9-1.4-41-5-12.5-2.5-23.2-5-46.5-11-38.3-9.9-57.5-14.8-61.5-16a333.4,333.4,0,0,0-39.5-9c-6.8-1.1-14.2-2.1-23.5-.5-5.7,1-10,2.6-17.5,5.5s-8.6,3.9-21.5,9.5S787.7,371,782,371a40,40,0,0,1-21.5-6.5A68.8,68.8,0,0,1,745,351c-7-7.8-15-14.6-22.5-22-15.2-15-23.4-23-36-31a131.9,131.9,0,0,0-34-15.5A104.8,104.8,0,0,0,624,278a123.1,123.1,0,0,0-22.5,2c-3.7.6-8.3,1.5-18,4-15,3.9-17.9,5.3-29.5,8.5a327.3,327.3,0,0,1-34.5,7.5,256.8,256.8,0,0,1-26.5,3c-9.6.6-12.3.2-21.5.5a258.5,258.5,0,0,0-30.5,3l11,.8,12.3.5c14.7.7,25.7,1.5,28.5,1.8,5.1.4,20.1,1.6,39.3,4,12.5,1.6,37,4.7,65,10.5,51.8,10.8,91.6,26,111.3,33.7C735.1,368,761,379,761,379c16.7,7.1,24.7,10.8,40.3,16.7,11.2,4.2,22.9,8.6,38.3,13A402.6,402.6,0,0,0,888.3,419c7.7,1.2,27.3,3.9,62.7,5,14.1.4,42.4.9,82.3-1.3,12.3-.7,53.6-3.3,108.3-11.3,27.5-4.1,50.9-8.5,97.7-17.3,22.1-4.2,41-7.9,69.3-12,17.3-2.5,31.7-4.5,51.3-6a650.1,650.1,0,0,1,68.7-1.3c29.2.9,43.7,1.4,62.3,4C1502,380.2,1513.5,382.2,1514,380.5Z" transform="translate(0.5 0.5)" class="line-aqua-bg-1"></path>' +
        '<path d="M0,0C.7,8.9,1.9,20.1,4,33s4.9,26.5,7.7,37.3c4.1,16.3,7.8,30.8,15.7,46.3,2.7,5.4,5.8,9.8,12,18.7,3.4,4.9,6.1,8.3,10.7,11a30.7,30.7,0,0,0,9,3.3,27.5,27.5,0,0,0,10.7.3c4-.7,6.9-2.4,12-6A161.5,161.5,0,0,0,97,132c3.2-2.9,8.9-8.4,20.3-21,6-6.6,12.6-12.8,18.3-19.7A39.3,39.3,0,0,1,148.3,81a21.3,21.3,0,0,1,7-2.3c1.3-.2,5.9-.6,13.3,3.3s11.3,8.7,17,15.3c1.1,1.3,3.3,3.9,9.3,12.3,4.1,5.8,8.1,11.3,13,18.7,6.3,9.6,12.2,19.3,18.3,30.3,10.9,19.6,10.8,22,23.3,46.3,11.3,21.9,11,19.2,25,46,7.5,14.3,10.7,21.1,17.7,33,5.9,10.1,10.2,16.5,17,26.7,2.7,4,6.1,9.1,11.2,15.3,6.9,8.5,10.6,11.7,13,13.5s7.2,5.5,12.5,7a31.6,31.6,0,0,0,14.5.5c6.6-1.3,11-4.6,19.5-11s8-7.4,14.5-12a91,91,0,0,1,17.5-9.5c11.1-4.8,20.1-6.4,29-8a217.9,217.9,0,0,1,30.5-3c11-.5,11.5.1,21.5-.5a256.8,256.8,0,0,0,26.5-3,327.3,327.3,0,0,0,34.5-7.5c11.6-3.2,14.5-4.6,29.5-8.5,9.7-2.5,14.3-3.4,18-4a123.1,123.1,0,0,1,22.5-2,104.8,104.8,0,0,1,28.5,4.5,131.9,131.9,0,0,1,34,15.5c12.6,8,20.8,16,36,31,7.5,7.4,15.5,14.2,22.5,22a68.8,68.8,0,0,0,15.5,13.5A40,40,0,0,0,782,371c5.7,0,10.3-1.3,24.5-7.5S820.2,357,828,354s11.8-4.5,17.5-5.5c9.3-1.6,16.7-.6,23.5.5a333.4,333.4,0,0,1,39.5,9c4,1.2,23.2,6.1,61.5,16,23.3,6,34,8.5,46.5,11,18.5,3.7,29.1,5,41,5a178.3,178.3,0,0,0,26-2c11.2-1.7,21-4.2,45.5-12.5,15.8-5.4,19.3-6.9,42-15,26.5-9.5,43.2-15.1,47.5-16.5,21.8-7.3,5.9-1.5,47.5-14.5,8-2.5,14.6-4.6,24-5.5a109.3,109.3,0,0,1,27.5,1c8.2,1.2,15.2,2.9,26.5,6.5,20.4,6.4,24.1,9.1,44,16a372.4,372.4,0,0,0,42,12.5c17,3.9,25.5,5.9,34.5,6a97.3,97.3,0,0,1,17,1.5A89.7,89.7,0,0,1,1495,371a84.3,84.3,0,0,1,19,9.5" transform="translate(0.5 0.5)" class="line-aqua"></path></g> ' +
        '</svg><img src="./image/img-dynamic.png" title="" alt="" class="only__dynamic_bottom"><svg id="only-footer" data-name="only-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.7 337.1"> ' +
        '<path d="M0,275.5c6,.9,14.4,2,24.5,3,12,1.1,22.1,1.6,37,2,20.6.5,35.9.9,57,.5s39.7-.8,64-3.5,47-5.2,75.8-13.8c19.9-6,24.8-9.5,65-22.3A343.3,343.3,0,0,1,357,232a352,352,0,0,1,43.3-6.3,359.1,359.1,0,0,1,36.3-1.3,295.6,295.6,0,0,1,39.3,3c8.5,1.2,17.9,3,40,9s32.3,9.4,61.3,18.3l55.7,17c42.7,13.1,43.3,13.5,58.7,18,17.5,5.2,35.5,10.5,59.7,16.7,21.5,5.5,38.2,9.3,50.3,12,19.4,4.3,32.7,7.3,51,10.7,12.4,2.3,33,6,60.3,9,25.1,2.8,44,3.7,59.3,4.3,5.7.3,29.6,1.3,61.7,1,10.7-.1,29.7-.3,54.3-1.7,21.2-1.2,43-2.4,70-6.3,20.7-3,46.8-6.9,79.7-17.3,18-5.7,46.4-14.9,79-34.3,20.8-12.4,35.1-24.2,63.7-48,25.9-21.5,30-27.2,56-48.7,16.8-13.9,34.1-28.1,53.3-41,51.6-34.5,103.3-49.5,133.7-56,12.1-2.6,50.6-10.8,92.3-10.3,6.1.1,18.3.4,35.3-.7a446.2,446.2,0,0,0,50-6.3c52.8-10.4,110.2-43.1,118.7-48V350H0Z" transform="translate(0.5 -23.8)" class="only-footer only-footer-bg"></path>' +
        '<path d="M0,279a165.4,165.4,0,0,0,21.3,19.3,162.6,162.6,0,0,0,25,15.7A166.4,166.4,0,0,0,76,325.3c7.5,2.1,30.7,8.1,66.3,6.7,25-1,42.9-5.1,65.3-10.3,8.9-2.1,41.2-9.9,83.7-26.7,32.1-12.7,61-26.9,75.3-34s28.3-14.4,49.7-23.3c25.9-10.9,38.8-14.3,44.3-15.7a229.7,229.7,0,0,1,44.3-6.7c24.4-1.1,42.9,2.3,55.3,4.7,24.1,4.6,41.1,11,59.3,18,29.2,11.2,31.2,14.8,72.7,33,30.6,13.4,54,22.2,63.3,25.7,14.3,5.3,35,12.9,63,21,32.5,9.4,58,14.7,68,16.7,32.8,6.5,58,9.3,64.7,10,27.5,2.9,72.7,7.5,130,.7,27.5-3.3,74.6-9.2,130-33.3a481.6,481.6,0,0,0,97.3-57.3c12.7-9.8,22.1-18.2,47-37,26.7-20.1,47.3-34.1,53.7-38.3,33.1-22.3,49.8-33.5,74.3-45.7a414.7,414.7,0,0,1,75-28.7c39.9-10.7,72.4-12.4,101.7-14,40.5-2.2,49.4,1.1,86.7-3.7,31.9-4.1,52.2-9.8,57.3-11.3,35.5-10.3,59.8-23.9,65.3-27A284.9,284.9,0,0,0,1920,12.3" transform="translate(0.4 -12)" class="only-footer only-footer-line only-footer-line_0"></path>' +
        '<path d="M0,269a174.8,174.8,0,0,0,29,24.5,169,169,0,0,0,32,17c12.6,4.9,27.2,8.7,49,10.5,33.2,2.7,62.6-.9,87-5.5,9.4-1.8,51.9-10.1,107.5-33.5,29.7-12.5,39.1-19.1,96.5-44,13-5.6,29.3-12.6,52-18.5,12.2-3.2,30.4-8,52.5-9,32.4-1.5,56.9,5.7,79.5,12.5,17.4,5.3,20.1,7.6,84,35.5,33.5,14.7,50.3,22,62,26.5a818.9,818.9,0,0,0,89.5,28.5,847.8,847.8,0,0,0,98,19A838.3,838.3,0,0,0,1018,340c29.1.4,66.5.7,114.5-7,37-5.9,66.8-10.7,103.5-27.5s65.9-39,79.5-49.5,13.4-11.7,34.5-28.5c14.6-11.6,39.8-31.5,71.5-51.5,26.5-16.7,45.8-28.8,74.5-40,43.9-17.1,81.2-20.8,99-22.5,12.2-1.1,29.8-1.3,65-1.5,41.9-.3,54.7.9,83-1.5,14.7-1.2,30.2-2.6,50.5-7A290,290,0,0,0,1852,85a270.1,270.1,0,0,0,68-43.5" transform="translate(0.4 -41.1)" class="only-footer only-footer-line only-footer-line_1"></path></svg>';

    (function(){
        $("#only__wrap-image").html(onlyTMPL);
    })();

    /* SQUARE BTN IN HEADER */
    // function whichTransitionEvent(){
    //     var t,
    //         el = document.createElement("fakeelement");
    //
    //     var transitions = {
    //         "transition"      : "transitionend",
    //         "OTransition"     : "oTransitionEnd",
    //         "MozTransition"   : "transitionend",
    //         "WebkitTransition": "webkitTransitionEnd"
    //     };
    //
    //     for (t in transitions){
    //         if (el.style[t] !== undefined){
    //             return transitions[t];
    //         }
    //     }
    // }
    //
    // var transitionEvent = whichTransitionEvent();
    //
    // function randomNumber() {
    //     return Math.floor(Math.random() * (1 - 18)) + 18;
    // }
    //
    // function timerStartAnimationBtn(classNameBtn, iconNameCheckAnimation, intervalNumber) {
    //     var timerIdNumber = setInterval(function(){
    //         var randomNum   = randomNumber(),
    //             btnName     = $(classNameBtn),
    //             leftNum,
    //             topNum;
    //
    //         leftNum = 59 * randomNum;
    //
    //         randomNum = randomNumber();
    //         topNum = 59 * randomNum;
    //
    //         console.log("btnName", btnName);
    //         console.log("left", leftNum);
    //         console.log("top", topNum);
    //
    //         btnName.css({
    //             "left" : leftNum,
    //             "top" : topNum
    //         });
    //
    //         btnName.addClass("active");
    //
    //         $(iconNameCheckAnimation).one(transitionEvent,
    //             function() {
    //                 $(this).closest("btn__square").removeClass("active");
    //                 clearInterval(timerIdNumber);
    //             });
    //     }, intervalNumber);
    // }
    //
    // timerStartAnimationBtn(".btn__square-0", ".btn__square-icon-0", 1000);
    // timerStartAnimationBtn(".btn__square-1", ".btn__square-icon-1", 2000);
    // timerStartAnimationBtn(".btn__square-2", ".btn__square-icon-2", 3000);
    // timerStartAnimationBtn(".btn__square-3", ".btn__square-icon-3", 4000);
});