
const aside = document.querySelector('.aside')
const section = document.querySelector('.section')
const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

/**
 * Permet d'ajouter une classe a un element html
 * @param {HTMLElement} element 
 * @param {string} classe 
 * @returns 
 */
function addClasslist (element , classe) {
    element.classList.add(`${classe}`)
}

function removeClasslist (element , classe) {
    element.classList.remove(`${classe}`)
}

light.addEventListener('click' , () => {
    removeClasslist(dark , 'dark-mode-switch-back')
    addClasslist(light , 'dark-mode-switch-back')
    addClasslist(document.body , 'dark-mode-dash')
})

dark.addEventListener('click' , () => {
    removeClasslist(light , 'dark-mode-switch-back')
    addClasslist(dark , 'dark-mode-switch-back')
    removeClasslist(document.body , 'dark-mode-dash')
})


openMenu.addEventListener('click' , () => {
    aside.style.marginLeft = '0'
    // section.style.filter = 'blur(0.5px)'
})
closeMenu.addEventListener('click' , () => {
    aside.style.marginLeft = '-300px'
    // section.style.filter = 'blur(0)'
})


