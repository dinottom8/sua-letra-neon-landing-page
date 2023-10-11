$(document).ready(function() {
    $(".logo").waypoint(function() {
        $("#secao2esquerda").addClass("animate__animated animate__fadeInLeft");
        $("#secao2direita").addClass("animate__animated animate__fadeInRight");
    })
    $(".titleSection2").waypoint(function(){
        $("#secao3esquerda").addClass("animate__animated animate__fadeInRight");
        $("#secao3direita").addClass("animate__animated animate__fadeInLeft");
    })
    $(".titleSection3").waypoint(function(){
        $("#secao4esquerda").addClass("animate__animated animate__fadeInLeft");
        $("#secao4direita").addClass("animate__animated animate__fadeInRight");
    })
    $(".titleSection4").waypoint(function(){
        $(".cardSection").addClass("animate__animated animate__fadeInUp");
    })
})

const menuMobileIcon = document.querySelector(".menuMobileIcon");
const menuMobile = document.querySelector(".menuMobile");
const itensMenuMobile = [...document.querySelectorAll(".linkHeader")];
const menuMobileModalBG = document.querySelector(".menuMobileModalBG");
menuMobileIcon.addEventListener("click", ()=> {
    menuMobile.classList.toggle("menuMobileActive");
    menuMobileModalBG.classList.toggle("menuMobileModalBGActive");
})
itensMenuMobile.map((el) => {
    el.addEventListener("click", fecharMenumobile);
})
menuMobileModalBG.addEventListener("click", fecharMenumobile);

function fecharMenumobile() {
    menuMobile.classList.remove("menuMobileActive");
    menuMobileModalBG.classList.remove("menuMobileModalBGActive");
}
