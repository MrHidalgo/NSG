$(document).ready(function(){

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
        loop: false,
        dots: true,
        nav:true
    });
    $(".case__right-carousel").owlCarousel({
        items: 1,
        loop: false,
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
        $(this).toggleClass("active");

        $("body, html").toggleClass("open-menu")
        $(".navigation").toggleClass("navigation--fixed")
    });
});