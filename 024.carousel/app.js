const carousel = document.querySelector(".container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

carousel.addEventListener("wheel", (e) => {
  e.preventDefault();
  carousel.scrollLeft += e.deltaY;
});

prevBtn.addEventListener("click", () => {
  carousel.style.scrollBehavior = "smooth";
  carousel.scrollLeft -= 326;
});

nextBtn.addEventListener("click", () => {
  carousel.style.scrollBehavior = "smooth";
  carousel.scrollLeft += 326;
  console.log("cool");
});
