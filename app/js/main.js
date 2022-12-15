var languages = {
  en: "English",
  de: "Deutsch",
};

var DEFAULT_LANGUAGE = "en";

var menuElem = document.getElementById("dropdown-menu");
var titleElem = menuElem.querySelector(".title");

// Set currently selected value (English in our case)
function selectOption(optionName) {
  titleElem.dataset.language = optionName;
  titleElem.innerText = languages[optionName];
}
selectOption(DEFAULT_LANGUAGE);

// Handle dropdown opening
titleElem.onclick = function () {
  menuElem.classList.toggle("open");
};

// Handle selecting new language
var optionsHolter = menuElem.querySelector("ul");
optionsHolter.onclick = function (event) {
  menuElem.classList.remove("open");
  console.log(event.target.dataset.language);
  if (event.target.dataset && event.target.dataset.language) {
    selectOption(event.target.dataset.language);
  }
};

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
