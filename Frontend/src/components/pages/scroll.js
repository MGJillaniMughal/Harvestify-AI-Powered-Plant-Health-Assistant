// scroll.js
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-custom");

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
});