const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", showOrHide);

function showOrHide() {
  if (input.type === "password") {
    input.type = "text";
	btn.classList.remove("opacity")
  } else {
    input.type = "password";
	btn.classList.add("opacity")
  }
}
