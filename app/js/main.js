$(function () {
    $('.banner__section-slider').slick({
        dots: true,
        prevArrow: '<button class="banner__section-slider-btn banner__section-slider-btnprev"><img src="images/left-arrow.svg"" alt=""></button>',
        nextArrow: '<button class= "banner__section-slider-btn banner__section-slider-btnnext " > <img src="images/right-arrow.svg" alt=""></button>'
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).parent().siblings().find('div')).removeClass('tabs__content-active');
        
        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs__content-active');
    });

    $(".product__item-favourite").on('click', function () {
        $(this).toggleClass('product__item-favourite--active');
    })

    $('.product__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product__slider-slider-btn product__slider-slider-btnprev"><img src="images/left-arrow-black.svg"" alt=""></button>',
        nextArrow: '<button class= "product__slider-slider-btn product__slider-slider-btnnext " > <img src="images/right-arrow-black.svg" alt=""></button>'

    });



});
