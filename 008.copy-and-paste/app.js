const copy = document.getElementById('copy')
const paste = document.getElementById('paste')
const copyBtn = document.getElementById('copyBtn')
const pasteBtn = document.getElementById('pasteBtn')

copy.setAttribute("placeholder", "Enter text and copy")


copyBtn.addEventListener("click", pasteText)

function pasteText() {
	pasteBtn.addEventListener("click", () => {
		paste.value = copy.value;
	})
}
