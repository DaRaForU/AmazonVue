export let cart = JSON.parse(localStorage.getItem('cart')) || [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 3
    }
];

export function totalQuantity(){
    let totalQty = 0;
    cart.forEach((cartItem) => {
      totalQty += cartItem.quantity;
    });

    return totalQty;
}

export function saveToLocal(){
    localStorage.setItem('cart', JSON.stringify(cart));
  }


export function addToCart(id){
    let qtySeleted = document.querySelector(`.js-select-tag-${id}`).value;

    qtySeleted = eval(qtySeleted);
    let matchingCart;
    cart.forEach((cartItem) => {
      if(id === cartItem.productId){
        matchingCart = cartItem;
      }
    });

    if(matchingCart){
      matchingCart.quantity += qtySeleted;
    }else{
      cart.push(
        {
          productId: id, 
          quantity: qtySeleted
        }
      );
    }

    document.querySelector('.js-cart-quantity').innerHTML = totalQuantity();  
    saveToLocal();
  }  
