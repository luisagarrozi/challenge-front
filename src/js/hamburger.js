let $hamburgerMenu = document.querySelector(".hamburger-menu");
let $navbar = document.querySelector(".navbar");

let checkMenuActive = () => {
 if ($hamburgerMenu.classList.contains("-active")) {
   $navbar.classList.add("-active");
 } else {
    $navbar.classList.remove("-active");
  }
};

$hamburgerMenu.onclick = function () {
  $hamburgerMenu.classList.toggle("-active");
 checkMenuActive();
 };
 

$('.show-cart').click(function () {
  $('.mini-cart').toggleClass('ativo');
});