const btn = document.querySelector('.btn')

// to get any key and its code 
window.addEventListener('keydown' , (e) => {
	btn.innerHTML = `${e.key} ===> ${e.code}`
})