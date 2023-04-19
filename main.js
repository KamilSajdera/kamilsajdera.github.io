AOS.init({
    once: true
});

const glad = "Im glad you're here.";
let napis = "";
let typing;

let wrapper;

$(function() {

    setTimeout(() => {
        let i=0;

        typing = setInterval(() => {
    
        napis += glad[i];
        $(".welcomeMessage p").html(`${napis}`)
        i++;

        if(i>=glad.length)
            clearInterval(typing)

        }, 0100);

        $(".topBar_navigate ul").css("visibility", "visible")
    }, 1200);
    
    
});

let menuOpen = false
$(".topBar_menu").click(() => {

    $(".topBar_navigate").toggleClass("menuActive")
    menuOpen = !menuOpen;

    if(menuOpen)
    {
        $(".topBar_menu1").css("display", "none")
        $(".topBar_menu2").css("transform", "rotate(-45deg) translate(-6px, 5px)")
        $(".topBar_menu3").css("transform", "rotate(45deg)")
    }
    else 
    {
        $(".topBar_menu1").css("display", "block")
        $(".topBar_menu2").css("transform", "rotate(0deg) translate(0px)")
        $(".topBar_menu3").css("transform", "rotate(0deg)")
    }        
})

let clicks = 0;

$("#slide-next").click(() => {
    

    if(clicks < 3)
    {
        clicks++;
        $(".mySkills_itemsContainer").css("transform", `translateX(${-33*clicks}%)`)
        $(".mySkills_item").eq(clicks).toggleClass("mid")
        $(".mySkills_item").eq(clicks+1).toggleClass("mid")  
    }

})



$("#slide-prev").click(() => {

    if(clicks > -1)
    {
        clicks--;
        $(".mySkills_itemsContainer").css("transform", `translateX(${-33*clicks}%)`)
        $(".mySkills_item").eq(clicks+1).toggleClass("mid")
        $(".mySkills_item").eq(clicks+2).toggleClass("mid") 
    }

})


let bar_height = 0;
let block = false;

$(window).on('scroll', function () {
    
    const bgWrapper = $("#mainWrapper");
    const about = $("#aboutMe").offset().top;
    const services = $("#services").offset().top;
    const myWorks = $("#myWorks").offset().top;
    

    let scrollValue = $(window).scrollTop();

    if ($(window).scrollTop() > 100) 
        $('.topBar').addClass('menu_sticky');
    else 
        $('.topBar').removeClass('menu_sticky');


    /// paralax on main header
    bgWrapper.css("top", `${scrollValue * 0.5}px`);


    /// chart bars growing
    if(scrollValue+300 >= $(".chartWrapper").offset().top)
    {
        if(block)
            return;

        setInterval(() => {
            if(bar_height++ >= 80)
                return;

            $(".chartWrapper_bars__item").eq(1).css("height", bar_height+"%")

            if(bar_height <= 75)
                $(".chartWrapper_bars__item").eq(0).css("height", bar_height+"%")

            if(bar_height <= 55)
                $(".chartWrapper_bars__item").eq(2).css("height", bar_height+"%")

            if(bar_height <= 20)
                $(".chartWrapper_bars__item").eq(3).css("height", bar_height+"%")
    
        }, 1000/60);

        block = true;
    }



    /// active item in menu \

    if(scrollValue+100 < about)
        $(".topBar_navigate ul li a").eq(0).addClass("active-item");
    else 
        $(".topBar_navigate ul li a").eq(0).removeClass("active-item");


    if(scrollValue+100 >= about && scrollValue+100 < services)
        $(".topBar_navigate ul li a").eq(1).addClass("active-item");
    else 
        $(".topBar_navigate ul li a").eq(1).removeClass("active-item");


    if(scrollValue+100 >= services && scrollValue+100 < myWorks)
        $(".topBar_navigate ul li a").eq(2).addClass("active-item");
    else 
        $(".topBar_navigate ul li a").eq(2).removeClass("active-item");

    if(scrollValue+100 >= myWorks)
        $(".topBar_navigate ul li a").eq(3).addClass("active-item");
    else 
        $(".topBar_navigate ul li a").eq(3).removeClass("active-item");




    
});

$(".myWorks_item").mouseover(function() { 

    $(this).find("img").css("transform", "scale(1.1)");
    $(this).find(".myWorks_item__overlay").css("opacity", "1");

    setTimeout(() => {
        $(this).find(".myWorks_item__overlay_code").css("opacity", "1")
        $(this).find(".myWorks_item__overlay_code").css("top", "90px")

        $(this).find(".myWorks_item__overlay_demo").css("opacity", "1")
        $(this).find(".myWorks_item__overlay_demo").css("bottom", "60px")
    }, 0250);
    
  });
  
  $(".myWorks_item").mouseleave(function() { 

    $(this).find("img").css("transform", "scale(1)");
    $(this).find(".myWorks_item__overlay").css("opacity", "0");

    $(this).find(".myWorks_item__overlay_code").css("opacity", "0")
    $(this).find(".myWorks_item__overlay_code").css("top", "0px")

    $(this).find(".myWorks_item__overlay_demo").css("opacity", "0")
    $(this).find(".myWorks_item__overlay_demo").css("bottom", "0px")

  });





  