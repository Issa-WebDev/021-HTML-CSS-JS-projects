const menu = document.querySelector('.menu');
const menuContenair = document.querySelector('.menu-contenair')
const sidebarFull = document.querySelector('.sidebar-full');
const main = document.querySelectorAll('.main');
const search = document.querySelector('.right .search');
const middleSearchBtn = document.querySelector('.middle .search button');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const middle = document.querySelector('.middle');
const header = document.querySelector('.header')



menu.addEventListener('click', () => {

    sidebarFull.classList.toggle('show-sidebar-full');
    menuContenair.classList.toggle('meunu-active')

    main.forEach( box => {
        box.classList.toggle('main-blur');
    });
})

search.addEventListener('click' , () => {
    left.classList.add('remove-top')
    right.classList.add('remove-top')
    middle.classList.add('show-search-bar')
    header.classList.add('center-header')
})

middleSearchBtn.addEventListener('click' , () => {
    left.classList.remove('remove-top')
    right.classList.remove('remove-top')
    middle.classList.remove('show-search-bar')
    header.classList.remove('center-header')
})

