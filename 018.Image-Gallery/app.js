const images = document.querySelectorAll("img");
const imageFullScreen = document.querySelector(".image-full-screen");
const img = document.getElementById("img");
const closer = document.getElementById("close");

closer.addEventListener("click", function () {
  imageFullScreen.style.display = "none";
});

images.forEach((image, index) => {
  image.addEventListener("click", function () {
    imageFullScreen.style.display = "flex";
    img.src = `images/img${index}.jpg`;
  });
});
