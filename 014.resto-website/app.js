const nav = document.querySelector(".nav");
const links = document.querySelector(".nav .nav-links ul");
const openMenu = document.querySelector(".open-menu-icon");
const closeMenu = document.querySelector(".close-menu-icon");

window.addEventListener("scroll", function () {
  if (scrollY > 0) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
});

openMenu.addEventListener("click", function () {
  links.style.right = "60px";
  openMenu.classList.add("hide-open-menu-icon");
  closeMenu.classList.add("show-close-menu-icon");
});

closeMenu.addEventListener("click", function () {
  removeMenu();
});

function scrollTo() {
  removeMenu();

  const targetId = this.getAttributes("href");
  const targetElement = document.querySelector(targetId);

  targetElement.scrollIntoView({
    behavior: "smooth", // Défilement au scroll.
  });
}

const allLinks = document.querySelectorAll("a");
allLinks.forEach((link) => {
  link.addEventListener("click", scrollTo);
});

function removeMenu() {
  links.style.right = "-200px";
  openMenu.classList.remove("hide-open-menu-icon");
  closeMenu.classList.remove("show-close-menu-icon");
}
