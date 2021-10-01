const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__links");

burger.addEventListener("click", () => {
  nav.classList.toggle("show-links");
});
