// List with languages
$(".dropdown__menu-inner").on("click", function () {
  $(".dropdown__menu-list").toggleClass("menu__list--active");
});

// Adaptive menu button
$(function () {
  $(".menu-btn").on("click", function () {
    $(".header__menu-list").toggleClass("menu__list--active");
  });

  // Smooth transition to section
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body, html").animate({ scrollTop: top }, 1500);
  });
});
