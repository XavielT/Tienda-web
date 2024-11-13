let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Volver al primer slide
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Ir al último slide
    }

    const newTransform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.slider-wrapper').style.transform = newTransform;
}