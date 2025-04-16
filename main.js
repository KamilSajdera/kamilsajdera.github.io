AOS.init({
  once: true,
});

let mainCaption = "Im glad you're here.";
let displayCaption = "";
let typing;

let clicks = 0,
  bar_height = 0,
  block = false,
  menuOpen = false;

const myAgeContainer = $(".my-age");
const chartBars = $(".chartWrapper_bars__item");
const skillTextH2 = $(".skillSet__description h2");
const skillTextDescription = $(".skillSet__description p");

let transitions;
let descriptions = [];

function handle(event) {
  event.preventDefault();
}

$(function () {
  let date = new Date();
  let birthdayDate = new Date("2003-03-13");
  let myAge = date.getFullYear() - birthdayDate.getFullYear();
  let month = date.getMonth() - birthdayDate.getMonth();

  if (month < 0 || (month === 0 && date.getDate() < birthdayDate.getDate())) {
    myAge--;
  }

  myAgeContainer.text(myAge);

  setTimeout(() => {
    let i = 0;

    typing = setInterval(() => {
      displayCaption += mainCaption[i];
      $(".welcomeMessage p").html(`${displayCaption}`);
      i++;

      if (i >= mainCaption.length) clearInterval(typing);
    }, 100);

    $(".topBar_navigate ul").css("visibility", "visible");
  }, 1200);

  skillTextH2.text(descriptions[0].title);
  skillTextDescription.html(descriptions[0].description);
  chartBars.eq(0).addClass("active");
});

$(".topBar_menu").click(() => {
  $(".topBar_navigate").toggleClass("menuActive");
  menuOpen = !menuOpen;

  if (menuOpen) {
    $(".topBar_menu1").css("display", "none");
    $(".topBar_menu2").css("transform", "rotate(-45deg) translate(-6px, 5px)");
    $(".topBar_menu3").css("transform", "rotate(45deg)");
  } else {
    $(".topBar_menu1").css("display", "block");
    $(".topBar_menu2").css("transform", "rotate(0deg) translate(0px)");
    $(".topBar_menu3").css("transform", "rotate(0deg)");
  }
});

$("#slide-next").click(() => {
  if (clicks < 3) {
    clicks++;
    $(".mySkills_itemsContainer").css(
      "transform",
      `translateX(${-33 * clicks}%)`
    );
    $(".mySkills_item").eq(clicks).toggleClass("mid");
    $(".mySkills_item")
      .eq(clicks + 1)
      .toggleClass("mid");
  }
});

$("#slide-prev").click(() => {
  if (clicks > -1) {
    clicks--;
    $(".mySkills_itemsContainer").css(
      "transform",
      `translateX(${-33 * clicks}%)`
    );
    $(".mySkills_item")
      .eq(clicks + 1)
      .toggleClass("mid");
    $(".mySkills_item")
      .eq(clicks + 2)
      .toggleClass("mid");
  }
});

$(".topBar_language_PL").click(function () {
  setLanguage("pl");
  $(this).addClass("active_lan");
  $(".topBar_language_EN").removeClass("active_lan");
});

$(".topBar_language_EN").click(function () {
  setLanguage("en");
  $(this).addClass("active_lan");
  $(".topBar_language_PL").removeClass("active_lan");
});

$(window).on("scroll", function () {
  let scrollValue = $(window).scrollTop();
  const bgWrapper = $("#mainWrapper");

  const about = $("#aboutMe").offset().top;
  const services = $("#services").offset().top;
  const myWorks = $("#myWorks").offset().top;
  const contact = $("#contact").offset().top;

  if ($(window).scrollTop() > 100) $(".topBar").addClass("menu_sticky");
  else $(".topBar").removeClass("menu_sticky");

  /// paralax on main header
  bgWrapper.css("top", `${scrollValue * 0.5}px`);

  /// chart bars growing
  if (scrollValue + 300 >= $(".chartWrapper").offset().top) {
    if (!block) {
      setInterval(() => {
        if (bar_height++ >= 75) return;

        $(".chartWrapper_bars__item")
          .eq(0)
          .css("height", bar_height + "%");
        $(".chartWrapper_bars__item")
          .eq(1)
          .css("height", bar_height + "%");

        if (bar_height <= 65)
          $(".chartWrapper_bars__item")
            .eq(2)
            .css("height", bar_height + "%");

        if (bar_height <= 25)
          $(".chartWrapper_bars__item")
            .eq(3)
            .css("height", bar_height + "%");
      }, 1000 / 60);

      block = true;
    }
  }

  /// active item in menu
  if (scrollValue + 100 < about)
    $(".topBar_navigate ul li a").eq(0).addClass("active-item");
  else $(".topBar_navigate ul li a").eq(0).removeClass("active-item");

  if (scrollValue + 100 >= about && scrollValue + 100 < services)
    $(".topBar_navigate ul li a").eq(1).addClass("active-item");
  else $(".topBar_navigate ul li a").eq(1).removeClass("active-item");

  if (scrollValue + 100 >= services && scrollValue + 100 < myWorks)
    $(".topBar_navigate ul li a").eq(2).addClass("active-item");
  else $(".topBar_navigate ul li a").eq(2).removeClass("active-item");

  if (scrollValue + 100 >= myWorks && scrollValue + 300 < contact)
    $(".topBar_navigate ul li a").eq(3).addClass("active-item");
  else $(".topBar_navigate ul li a").eq(3).removeClass("active-item");

  if (scrollValue + 300 >= contact)
    $(".topBar_navigate ul li a").eq(4).addClass("active-item");
  else $(".topBar_navigate ul li a").eq(4).removeClass("active-item");
});

$(".myWorks_item").mouseover(function () {
  $(this).find("img").css("transform", "scale(1.1)");
  $(this).find(".myWorks_item__overlay").css("opacity", "1");

  setTimeout(() => {
    $(this).find(".myWorks_item__overlay_code").css("opacity", "1");
    $(this).find(".myWorks_item__overlay_code").css("bottom", "15px");

    $(this).find(".myWorks_item__overlay_demo").css("opacity", "1");
    $(this).find(".myWorks_item__overlay_demo").css("bottom", "15px");
  }, 250);
});

$(".myWorks_item").mouseleave(function () {
  $(this).find("img").css("transform", "scale(1)");
  $(this).find(".myWorks_item__overlay").css("opacity", "0");

  $(this).find(".myWorks_item__overlay_code").css("opacity", "0");
  $(this).find(".myWorks_item__overlay_code").css("bottom", "-25px");

  $(this).find(".myWorks_item__overlay_demo").css("opacity", "0");
  $(this).find(".myWorks_item__overlay_demo").css("bottom", "-25px");
});

$(".contact_form__usermail").keyup(function () {
  if (!$(".contact_form__usermail").val())
    $(".place_holder").eq(0).removeClass("no_clear");
  else $(".place_holder").eq(0).addClass("no_clear");
});

$(".contact_form__topic").keyup(function () {
  if (!$(".contact_form__topic").val())
    $(".place_holder").eq(1).removeClass("no_clear");
  else $(".place_holder").eq(1).addClass("no_clear");
});

$(".contact_form__textarea").keyup(function () {
  if (!$(".contact_form__textarea").val())
    $(".place_holder").eq(2).removeClass("no_clear");
  else $(".place_holder").eq(2).addClass("no_clear");
});

chartBars.click(function () {
  let option = parseInt($(this).attr("data-desc"));

  if (descriptions[option].title !== skillTextH2.text()) {
    skillTextH2.stop().fadeOut(0).fadeIn(700);
    skillTextDescription.stop().fadeOut(0).fadeIn(1000);
    skillTextH2.text(descriptions[option].title);
    skillTextDescription.html(descriptions[option].description);
    chartBars.removeClass("active");
    $(this).addClass("active");
  }
});

function loadLanguageFile(lang) {
  return $.getScript(`lang/lang-${lang}.js`);
}

function applyTranslations() {
  const elements = $("[data-i18n]");
  elements.each(function () {
    const key = $(this).data("i18n");
    if (translations[key]) {
      $(this).html(translations[key]);
    }
  });
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  $.getScript(`lang/lang-${lang}.js`)
    .done(function () {
      const elements = $("[data-i18n]");
      const translation = window.translations;

      mainCaption = translation.mainCaption;
      descriptions = translation.descriptions;

      skillTextH2.text(descriptions[0].title);
      skillTextDescription.html(descriptions[0].description);
      chartBars.removeClass("active");
      chartBars.eq(0).addClass("active");

      elements.each(function () {
        const key = $(this).data("i18n");
        if (translation[key]) {
          $(this).html(translation[key]);
        }
      });
    })
    .fail(function () {
      console.error("Error -> Failed to fetch lang file!");
    });
}
