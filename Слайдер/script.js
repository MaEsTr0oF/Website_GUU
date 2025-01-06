let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    const sliderWidth = document.querySelector('.slider').clientWidth;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * sliderWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

window.addEventListener('resize', () => showSlide(currentIndex));
