let $hamburgerMenu = document.querySelector(".hamburger-menu");
let $navbar = document.querySelector(".navbar");

$hamburgerMenu.onclick = function () {
  $navbar.classList.toggle("-active");
 };
