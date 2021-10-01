'use strict';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-sections");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("responsive");
    setTimeout(() => {
        navMenu.classList.toggle("responsive");
    }, 300)
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("responsive");
    navMenu.classList.remove("responsive");
}