const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const country = document.querySelector("h1");

input1.addEventListener("input", function () {
  form1.style.background = input1.value;
  form1.style.borderRadius = input1.value;
  findCountry();
});
input2.addEventListener("input", function () {
  form2.style.background = input2.value;
  form2.style.borderRadius = input2.value;
  findCountry();
});
input3.addEventListener("input", function () {
  form3.style.background = input3.value;
  form3.style.borderRadius = input3.value;
  findCountry();
});

function findCountry() {
  if (input1.value === "" && input2.value === "" && input3.value === "") {
    country.innerText = "Enter the flag to find country";
  } else if (
    input1.value === "orangered" &&
    input2.value === "white" &&
    input3.value === "green"
  ) {
    country.innerText = "Ivory Cost";
  } else if (
    input1.value === "green" &&
    input2.value === "yellow" &&
    input3.value === "red"
  ) {
    country.innerText = "Mali";
  }  else if (
    input1.value === "blue" &&
    input2.value === "white" &&
    input3.value === "red"
  ) {
    country.innerText = "France";
  }
}
