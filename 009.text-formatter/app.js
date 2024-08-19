const upperText = document.getElementById("upperText");
const lowerText = document.getElementById("lowerText");
const capitaliseText = document.getElementById("capitaliseText");
const boldText = document.getElementById("boldText");
const italicText = document.getElementById("italicText");
const underlineText = document.getElementById("underlineText");
const input = document.getElementById("input");
const textFormeted = document.getElementById("textFormated");

upperText.addEventListener("click", upper);
lowerText.addEventListener("click", lower);
capitaliseText.addEventListener("click", capitalise);
boldText.addEventListener("click", bold);
italicText.addEventListener("click", italic);
underlineText.addEventListener("click", underline);

function upper() {
  showOutput();
  textFormeted.style.textTransform = "uppercase";
}

function lower() {
  showOutput();
  textFormeted.style.textTransform = "lowercase";
}

function capitalise() {
  showOutput();
  textFormeted.style.textTransform = "capitalize";
}

function bold() {
  showOutput();
  textFormeted.classList.toggle("bolder")
}

function italic() {
  showOutput();
  textFormeted.classList.toggle("italic")
}

function underline() {
  showOutput();
  textFormeted.classList.toggle("underline")
}

function showOutput() {
  textFormeted.innerText = input.value;
}
