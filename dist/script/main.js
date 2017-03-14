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
        dots: true,
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
        dots: true,
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
        nav:true
    });
    $(".case__right-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
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
        var classNameSection    =   ".services .container, " +
            ".partner .container, .client .container, .case .container, " +
            ".contacts .container, .feedback .container, .insights .container";

        $(classNameSection).addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInUp',
                classToRemove : 'hidden',
                removeClassAfterAnimation: true
            }
        );
        $(".only .container").addClass('hidden').viewportChecker({
                offset: -100,
                classToAdd: 'visible animated slideInUp',
                classToRemove : 'hidden',
                removeClassAfterAnimation: true,
                callbackFunction: function(){
                    $(".only__count").addClass("only__count--active");
                    $(".only__count--num").countTo({
                        speed: 1500,
                        onComplete: function () {
                            $(".only__img").removeClass("infinite");
                            $(".only__count").removeClass("only__count--active");
                        }
                    });
                }
            }
        );
    }
});