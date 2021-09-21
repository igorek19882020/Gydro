$(function () {
    $('.banner__section-slider').slick({
        dots: true,
        prevArrow: '<button class="banner__section-slider-btn banner__section-slider-btnprev"><img src="images/left-arrow.svg"" alt=""></button>',
        nextArrow: '<button class= "banner__section-slider-btn banner__section-slider-btnnext " > <img src="images/right-arrow.svg" alt=""></button>'
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $('.tab').removeClass('tab-active');
        $('.tabs__content').removeClass('tabs__content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs__content-active');
    });

$(".product__item-favourite").on('click', function(){
    $(".product__item-favourite").toggleClass('product__item-favourite--active')
})





});

