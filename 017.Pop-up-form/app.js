const modal = document.querySelector(".modal")
const closeBtn = document.getElementById("closeBtn")
const signUpBtn = document.getElementById("signupBtn")
const submit = document.getElementById("btn")
const container = document.querySelector(".container")

signUpBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)
submit.addEventListener("click", closeModal)

function closeModal() {
	modal.classList.remove("showModal")
	container.style.opacity = "1"
}
function openModal() {
	modal.classList.add("showModal")
	container.style.opacity = "0.8"
}