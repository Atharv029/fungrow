let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const autoSlideInterval = setInterval(() => changeSlide(1), 3000);
});
