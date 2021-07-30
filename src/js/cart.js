let $cartButton = document.querySelector('.show-cart');
let $cart = document.querySelector('.cart');

$cartButton.onclick = function () {
    $cart.classList.toggle("-active");
   };

