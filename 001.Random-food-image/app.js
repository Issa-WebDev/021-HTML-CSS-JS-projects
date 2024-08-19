const imgBox = document.querySelector(".imageBox");
const img = document.querySelector("img");
console.log(img);

const images = [
  "imgages/c2.jpg",
  "imgages/c3.jpg",
  "imgages/c4.jpg",
  "imgages/c5.jpg",
  "imgages/c6.jpg",
  "imgages/c7.jpg",
  "imgages/c8.jpg",
  "imgages/c9.jpg",
  "imgages/c10.jpg",
];

// ---------- change image after mouseenter (randomly) ------------
imgBox.addEventListener("mouseenter", function () {
  img.src = images[Math.floor(Math.random() * images.length)];
});

// ---------- change image after each one seconde ------------
// setInterval(() => {
// 	img.src = images[Math.floor(Math.random() * images.length)];
// },1000)
