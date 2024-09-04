const slide = document.querySelectorAll(".slide");
const slides = document.querySelector(".slides");
let currentIndex = 0;

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= slide.length) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(showNextSlide, 3000);
