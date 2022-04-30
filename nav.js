const navDesktop = document.querySelector(".nav-desktop")
const navMobile = document.querySelector(".nav-mobile")
const iconMenu = document.querySelector(".icon-menu")
const flou = document.querySelector(".flou")
const iconCross = document.querySelector(".icon-cross")
const menuDesktop = document.querySelector(".menu-desktop")
const menuMobile = document.querySelector(".menu-mobile")

function fixNav(){
    if(window.scrollY > navDesktop.offsetHeight + 150){
        navDesktop.classList.add("active")
    } else {
        navDesktop.classList.remove("active")
    }
}

function responsiveNav(){
    iconMenu.classList.toggle("icon-cross")
    if(iconMenu.classList.contains("icon-cross")){
        navMobile.style.display = "block"
        flou.style.display = "block"
    } else{
        navMobile.style.display = "none"
        flou.style.display = "none"
    }
}

iconMenu.addEventListener("click", responsiveNav)

window.addEventListener("scroll", fixNav)