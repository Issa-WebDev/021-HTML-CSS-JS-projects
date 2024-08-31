const scrollGallery = document.getElementById("gallery");
const back = document.getElementById("back");
const next = document.getElementById("next");

scrollGallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollGallery.scrollLeft += e.deltaY;
});

back.addEventListener("click", () => {
  scrollGallery.style.scrollBehavior = "smooth";
  scrollGallery.scrollLeft -= 800;
});

next.addEventListener("click", () => {
  scrollGallery.style.scrollBehavior = "smooth";
  scrollGallery.scrollLeft += 800;
});
