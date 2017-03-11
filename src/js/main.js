$(document).ready(function(){

    /* LANG */
    $(".language__btn").on("click", function(){
        $(".language__btn").removeClass("active");
        $(this).addClass("active");
    });


    /* PARTNER */
    $(".partner__btn").on("click", function(){
        var attrBtn = $(this).attr("data-partner");

        console.log(attrBtn);

        $(".partner__btn").removeClass("active");
        $(this).addClass("active");

        $(".partner__carousel").removeClass("partner__carousel_show").addClass("partner__carousel_hide");
        $(".partner__carousel-" + attrBtn).removeClass("partner__carousel_hide").addClass("partner__carousel_show");
    });
    /* SLIDER */
    $(".partner__carousel-0").owlCarousel({
        items:3,
        loop: true,
        dots: true,
        nav:true
    });
    $(".partner__carousel-1").owlCarousel({
        items:3,
        loop: true,
        dots: true,
        nav:true
    });
    $(".partner__carousel-2").owlCarousel({
        items:3,
        loop: true,
        dots: true,
        nav:true
    });
    // var count = 1;
    // $(".slider__carousel .owl-dot").each(function(){
    //     $(this).find("span").text("0" + count);
    //     count++;
    // });


    /* CLIENT SLIDER */
    $(".client__carousel").owlCarousel({
        items:3,
        loop: true,
        dots: true,
        nav:true
    });


    /* CASE CAROUSEL */
    $(".case__left-carousel").owlCarousel({
        items:1,
        loop: false,
        dots: true,
        nav:true
    });
    $(".case__right-carousel").owlCarousel({
        items:1,
        loop: false,
        dots: true,
        nav:true
    });
});