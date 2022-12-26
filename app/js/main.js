$(".dropdown__menu-inner").on("click", function () {
  $(".dropdown__menu-list").toggleClass("menu__list--active");
});

// swiper
var swiper = new Swiper(".comments__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(function () {
  // ------ Кнопка бургер-меню для адаптива ------------
  $(".menu-btn").on("click", function () {
    $(".header__menu-list").toggleClass("menu__list--active");
  });

  // ------ Плавный переход к разделам сайта с меню -----------
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body, html").animate({ scrollTop: top }, 1500);
  });
});
