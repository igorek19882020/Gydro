$(function () {
    $('.banner__section-slider').slick({
        dots: true,
        prevArrow: '<button class="banner__section-slider-btn banner__section-slider-btnprev"><img src="images/left-arrow.svg"" alt=""></button>',
        nextArrow: '<button class= "banner__section-slider-btn banner__section-slider-btnnext " > <img src="images/right-arrow.svg" alt=""></button>'
    });

    $('.search__tabs-item').on('click', function (e) {
        e.preventDefault();

        $('.search__tabs-item').removeClass('search__tabs-item-active');
        $('.search__content-item').removeClass('search__content-item-active');
        
        $(this).addClass('search__tabs-item-active');
        $($(this).attr('href')).addClass('search__content-item-active');
    });



    

});
