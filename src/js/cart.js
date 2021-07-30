let $cartButton = document.querySelector('.show-cart');
let $cart = document.querySelector('.cart');

//Abre e fecha o carrinho no click 
$cartButton.onclick = function () {
    $cart.classList.toggle("-active");
   };

// Puxa os dados do JSON
let xhr = new XMLHttpRequest;
let json;

xhr.open('GET', './products.json', false)
xhr.onload = function(){
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      json = JSON.parse(xhr.response);
    }
  }
}
xhr.send();

// Função para criar uma nova seção no carrinho:
let $itens = document.querySelector('.itens');

const newProduct = (image, name, quantity, bestPriceFormated) => {
  const NewProductCart = document.createElement('section');
  NewProductCart.classList.add('item-cart');

  const NewProductImage = document.createElement('img');
  NewProductImage.classList.add('item-image');
  NewProductImage.setAttribute('src', image)

  const NewWrapper = document.createElement('div');
  NewWrapper.classList.add('item-info');

  const NewProductDescription = document.createElement('p')
  NewProductDescription.classList.add('item-name')
  NewProductDescription.innerHTML = name;

  const NewAmountWrapper = document.createElement('div');
  NewAmountWrapper.classList.add('caixa-price-qtd');

  const NewProductAmount = document.createElement('p')
  NewProductAmount.classList.add('item-qtd');
  NewProductAmount.innerHTML = 'Qtd.: ';

  const newSpanAmount = document.createElement('span');
  newSpanAmount.classList.add('amount');
  newSpanAmount.innerHTML = quantity

  const NewProductPrice = document.createElement('p');
  NewProductPrice.classList.add('item-price');
  NewProductPrice.innerHTML = bestPriceFormated;

  $itens.insertAdjacentElement('beforeend', NewProductCart);
  NewProductCart.insertAdjacentElement('beforeend', NewProductImage);
  NewProductCart.insertAdjacentElement('beforeend', NewWrapper);
  NewWrapper.insertAdjacentElement('beforeend', NewProductDescription);
  NewWrapper.insertAdjacentElement('beforeend', NewAmountWrapper);
  NewAmountWrapper.insertAdjacentElement('beforeend', NewProductAmount);
  NewProductAmount.insertAdjacentElement('beforeend', newSpanAmount);
  NewAmountWrapper.insertAdjacentElement('beforeend', NewProductPrice);
}


// Executar a função para cada produto

json.cart.item.forEach(product => {
  newProduct(product.image, product.name, product.quantity, product.bestPriceFormated);
});

// Calculadora do valor total
let $amount = document.querySelector('.itens-value');

const calculatePriceTotal = (price) => {
  let priceConvert = price / 100
  $amount.innerHTML = `R$ ${priceConvert.toLocaleString('pt-BR')}`;
}

let count = 0;
for(item of json.cart.item){
  count += item.bestPrice;
} 

calculatePriceTotal(count)

