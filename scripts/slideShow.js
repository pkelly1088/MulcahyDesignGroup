'use strict';
let slideIndex = 0;

const showSlides = () => {
    let slides = document.querySelectorAll('.mySlides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display="block";
    slideIndex++;
    if (slideIndex === slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 8000);
}

window.onload = showSlides();