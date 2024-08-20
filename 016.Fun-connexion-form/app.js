const boxLeft = document.querySelector('.box-left')
const boxRight = document.querySelector('.box-right')
const moi = document.querySelector('.moi')
const btn = document.getElementById('submit')

btn.addEventListener('click', () => {
	boxRight.classList.toggle('move-to-left')
	boxLeft.classList.toggle('move-to-right')
	moi.classList.toggle('move-moi')
})
