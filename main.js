AOS.init({
  once: true,
});

const mainCaption = "Im glad you're here.";
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

const descriptions = [
  {
    title: "HTML & CSS",
    description: `I can design website structures using <b>semantic HTML elements</b>, which not only improves the readability of the code, but also has a positive effect on the website's accessibility and positioning in search results. I have experience in creating HTML forms using various field types and handling client-side validation using HTML5 attributes such as <i>required</i> and <i>pattern</i>. <br /> <br />
    I can use a variety of CSS selectors, including class and ID selectors, as well as pseudo-classes and pseudo-elements, to precisely style elements on a page. I have deep knowledge of <b>flexbox</b> and <b>grid layout</b>, which allows me to design flexible and responsive website layouts that scale perfectly on various devices. I have experience in working with CSS preprocessors such as <b>SASS</b> and <b>LESS</b>, which allows me to more conveniently manage style using variables, mixins and functions.`,
  },
  {
    title: "JavaScript",
    description: `I am skilled in manipulating the DOM tree using JavaScript, which allows me to dynamically add, remove and modify elements on the page depending on user actions. I am familiar with <b>asynchrony concepts</b> in JavaScript such as <i>Callbacks</i>, <i>Promises</i> and <i>Async/Await</i>, which allows me to handle operations that require time-consuming data downloading from external sources (API). I know concepts such as primitive/complex types, event loop, destructuring, spread operator and scope. <br /> <br />
    I have also made several projects in jQuery, so I can confidently say that it is not a problem for me. I can animate jQuery applications with smooth transitions, size changes, and the appearance of elements, which results in a more attractive website. I can use various events and respond to user interactions in an efficient and clear way. I can integrate and customize jQuery plugins, using ready-made solutions available in this library's ecosystem.`,
  },
  {
    title: "React",
    description: `React is definitely the environment in which I write best. I can manage state in local and global (<b>Context API, Redux</b>) and respond to user interactions using event handling functions, I understand the life cycle of components.
    I can manage forms, authorize users and create my own custom hooks. I am able to optimize my React application, for example through <i>useMemo, useCallback</i> or <i>lazy loading</i>. <br />
    I successfully write applications using React Router using its hooks such as useNavigate, useNavigation, useFetcher, useParams, useSearchParams, useLocation, useSubmit and use(Route)LoaderData.
    I know various ways and approaches to communicate with the server (including <b>Tanstack Query</b>), which allows me to manage data asynchronously and update the UI based on the response from the server. I always ensure a good 'loading state' and an appropriate 'error state'.`,
  },
  {
    title: "Next JS",
    description:
      "Currently in the process of learning... Soon there will be quite a lot of material to present here ;)",
  },
];

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
  chartBars.eq(0).addClass('active')

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
    $(this).find(".myWorks_item__overlay_code").css("top", "90px");

    $(this).find(".myWorks_item__overlay_demo").css("opacity", "1");
    $(this).find(".myWorks_item__overlay_demo").css("bottom", "60px");
  }, 250);
});

$(".myWorks_item").mouseleave(function () {
  $(this).find("img").css("transform", "scale(1)");
  $(this).find(".myWorks_item__overlay").css("opacity", "0");

  $(this).find(".myWorks_item__overlay_code").css("opacity", "0");
  $(this).find(".myWorks_item__overlay_code").css("top", "-25px");

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
