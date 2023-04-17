AOS.init({
    once: true
});

const glad = "Im glad you're here.";
let napis = "";
let typing;

let wrapper = $("")

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
    }, 0700);
    
    
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



$(window).on('scroll', function () {
    
    const bgWrapper = document.getElementById("mainWrapper");


    let scrollValue = $(window).scrollTop();

    if ($(window).scrollTop() > 100) 
        $('.topBar').addClass('menu_sticky');
    else 
        $('.topBar').removeClass('menu_sticky');


    /// paralax on main header
    bgWrapper.style.top = scrollValue * 0.5 + 'px';


    
});