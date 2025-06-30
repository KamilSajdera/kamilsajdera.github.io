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

const projectLeftSide = $(".myWorks_mainData")[0];
const projectRightSide = $(".myWorks_description")[0];
const projectItem = $(".myWorks_mainData");
const projectDescription = $(".myWorks_description");
const projectGoNext = $(".myWorks_mainData main .arrow-right");
const projectGoPrev = $(".myWorks_mainData main .arrow-left");
let projectsDescFontSize = 1.75;
let currentProjectNumber = 1;

function handle(event) {
  event.preventDefault();
}

$(function () {
  const language = localStorage.getItem("lang") || "en";
  setLanguage(language);

  if (language === "pl") {
    $(".topBar_language_PL").addClass("active_lan");
    $(".topBar_language_EN").removeClass("active_lan");
  } else {
    $(".topBar_language_EN").addClass("active_lan");
    $(".topBar_language_PL").removeClass("active_lan");
  }

  let date = new Date();
  let birthdayDate = new Date("2003-03-13");
  let myAge = date.getFullYear() - birthdayDate.getFullYear();
  let month = date.getMonth() - birthdayDate.getMonth();

  if (month < 0 || (month === 0 && date.getDate() < birthdayDate.getDate())) {
    myAge--;
  }

  myAgeContainer.text(myAge);

  let i = 0;

  $(".topBar_navigate ul").css("visibility", "visible");
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
  if (clicks < 4) {
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

        if (bar_height <= 45)
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

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  $.getScript(`lang/lang-${lang}.js`)
    .done(function () {
      const elements = $("[data-i18n]");
      let translation = window.translations;

      mainCaption = translation.welcome2;
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

      displayCaption = "";
      let i = 0;
      clearInterval(typing);

      if (!mainCaption) {
        console.warn("mainCaption is not set");
        return;
      }

      typing = setInterval(() => {
        displayCaption += mainCaption[i];
        $(".welcomeMessage p").html(displayCaption);
        i++;
        if (i >= mainCaption.length) clearInterval(typing);
      }, 100);
    })
    .fail(function () {
      console.error("Error -> Failed to fetch lang file!");
    });
}

$(document).ready(function () {
  renderProjects();

  while (projectRightSide.clientHeight > projectLeftSide.clientHeight) {
    projectRightSide.style.fontSize = `${projectsDescFontSize}em`;
    projectsDescFontSize -= 0.05;
  }
});

$(document).on("click", ".arrow-right", function () {
  slideProject("next");
});

$(document).on("click", ".arrow-left", function () {
  slideProject("prev");
});

function slideProject(type) {
  const projectsContainer = $(".myWorks_mainData .project-preview");
  const projectBeforeImage = $(
    ".myWorks_mainData .project-preview .image-before"
  );
  const projectCenterImage = $(
    ".myWorks_mainData .project-preview .image-center"
  );
  const projectAfterImage = $(
    ".myWorks_mainData .project-preview .image-after"
  );

  let storedBeforeImage = projectBeforeImage.find("img")[0].src;
  let storedCenterImage = projectCenterImage.find("img")[0].src;
  let storedAfterImage = projectAfterImage.find("img")[0].src;

  if (type === "next") {
    projectsContainer.addClass("carousel-next");

    setTimeout(() => {
      projectsContainer.removeClass("carousel-next");
      projectBeforeImage.find("img")[0].src = storedAfterImage;
      projectCenterImage.find("img")[0].src = storedBeforeImage;
      projectAfterImage.find("img")[0].src = storedCenterImage;
    }, 600);
  } else {
    projectsContainer.addClass("carousel-prev");

    setTimeout(() => {
      projectsContainer.removeClass("carousel-prev");
      projectBeforeImage.find("img")[0].src = storedCenterImage;
      projectCenterImage.find("img")[0].src = storedAfterImage;
      projectAfterImage.find("img")[0].src = storedBeforeImage;
    }, 600);
  }
}

const projectsArray = [
  {
    name: "Organizer",
    www_link: "organizer-wine.vercel.app",
    git_link: "/KamilSajdera/organizer",
    description: `Organizer to pełnoprawna aplikacja webowa służąca do zarządzania
        codziennymi zadaniami, wydarzeniami i wydatkami w jednym miejscu.
        Użytkownicy mogą tworzyć konto, logować się i zarządzać swoimi danymi
        dzięki autoryzacji opartej na <b>JSON Web Tokens (JWT)</b>. Backend
        został zbudowany z wykorzystaniem <b>Next.js API Routes</b>, a
        zaszyfrowane dane przechowywane są w <b>MongoDB</b>. Aplikacja umożliwia
        dodawanie, edycję i usuwanie wydarzeń, zadań oraz wydatków, a także
        przesyłanie oraz przechowywanie obrazów (np. profilowe) za pomocą
        <b>Cloudinary</b>. Stylowanie zrealizowano przy użyciu
        <b>SCSS Modules</b>, co zapewnia przejrzystość i modularność kodu CSS.
        Formularze w aplikacji wykorzystują <b>form actions</b>.`,
    pictures: ["nextorganizer.png", "nextorganizer2.png", "nextorganizer3.png"],
  },
  {
    name: "Generator nut",
    www_link: "kamilsajdera.github.io/Notes-Generator",
    git_link: "/KamilSajdera/Notes-Generator",
    description: `Narzędzie webowe umożliwiające tworzenie i edytowanie zapisu nutowego – głównie linii melodycznej – z możliwością precyzyjnego określania szczegółów muzycznych. 
        Aplikacja oferuje szeroki zestaw funkcji, takich jak wybór wysokości dźwięków, wartości rytmicznych oraz tempa.
        Użytkownik może zbudować własną sekwencję nut, a następnie ją odsłuchać dźwięk po dźwięku w wybranym tempie, co pozwala na szybkie testowanie i weryfikację brzmienia. 
        Projekt skupia się na intuicyjnym interfejsie i precyzyjnym odwzorowaniu zapisu muzycznego, co czyni go przydatnym zarówno dla początkujących muzyków, jak i osób pracujących nad szkicami melodii. Projekt został zrealizowany w oparciu o React, z użyciem technik zarządzania globalnym stanem (createContext) oraz własnych hooków. 
        Obsługa formularzy i walidacja danych została zaimplementowana za pomocą react-hook-form, a możliwość wydruku gotowego zapisu nutowego zapewnia integracja z react-to-print.`,
    pictures: [
      "notesgenerator.png",
      "notesgenerator2.png",
      "notesgenerator3.png",
    ],
  },
];

function renderProjects() {
  projectItem[0].innerHTML = `<header>
          <h3>${projectsArray[currentProjectNumber].name}</h3>
          <div class="sites">
            <div class="site">
              <img src="images/www.png" alt="WWW icon" />
              <span class="links">
                <a href="https://${projectsArray[currentProjectNumber].www_link}" target="_blank"
                  >${projectsArray[currentProjectNumber].www_link}</a
                ></span
              >
            </div>
            <div class="site">
              <img src="images/git.png" alt="Github icon" class="git" />
              <span class="links"
                ><a
                  href="https://github.com${projectsArray[currentProjectNumber].git_link}"
                  target="_blank"
                  >${projectsArray[currentProjectNumber].git_link}</a
                ></span
              >
            </div>
          </div>
        </header>
        <main>
          <div class="arrow-left">
            <img src="images/left.png" alt="arrow-left" />
          </div>
          <div class="arrow-right">
            <img src="images/right.png" alt="arrow-right" />
          </div>
          <div class="project-preview">
            <div class="image-before">
              <img src="images/${projectsArray[currentProjectNumber].pictures[1]}" alt="Project preview" />
            </div>
            <div class="image-center">
              <img src="images/${projectsArray[currentProjectNumber].pictures[0]}" alt="Project preview" />
            </div>
            <div class="image-after">
              <img src="images/${projectsArray[currentProjectNumber].pictures[2]}" alt="Project preview" />
            </div>
          </div>
        </main>`;

  projectDescription[0].innerHTML =
    projectsArray[currentProjectNumber].description;
}
