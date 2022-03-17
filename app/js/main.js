$(function () {
  $(".banner__section-slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner__section-slider-btn banner__section-slider-btnprev"><img src="images/left-arrow.svg"" alt=""></button>',
    nextArrow:
      '<button class= "banner__section-slider-btn banner__section-slider-btnnext " > <img src="images/right-arrow.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab-active");
    $($(this).closest(".tabs__wrapper").siblings().find("div")).removeClass(
      "tabs__content-active"
    );

    $(this).addClass("tab-active");

    $($(this).attr("href")).addClass("tabs__content-active");
    $(".product__slider").slick("setPosition");
    
  });

  $(".product__item-favourite").on("click", function () {
    $(this).toggleClass("product__item-favourite--active");
  });

  $(".product__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product__slider-slider-btn product__slider-slider-btnprev"><img src="images/left-arrow-black.svg"" alt=""></button>',
    nextArrow:
      '<button class= "product__slider-slider-btn product__slider-slider-btnnext"><img src="images/right-arrow-black.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  
  $(".filter-style").styler();
  
  $(".filter__item-drop, .filter__extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle(200);
    e.preventDefault();
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btnline").removeClass("catalog__filter-button--active");
    $(".product__item-wrapper").removeClass("product__item-wrapper--list");
  });

  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active");
    $(".product__item-wrapper").addClass("product__item-wrapper--list");
  });
  
  $(".rateYo").rateYo({
    rating: 3.6,
    spacing: "7px",
    ratedFill: "#1c62cd",
    normalFill: "#c4c4c4",
  });
  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });

  $(".footer__topdrop").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("footer__topdrop-active");
  });
  
  $(".aside__btn").on("click", function () {
    $(this).next().slideToggle();
    e.preventDefault;
  });
});
