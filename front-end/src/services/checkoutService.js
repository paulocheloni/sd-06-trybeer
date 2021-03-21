export function removeCheckoutItem(name, cart, setCart) {
  const newCart = cart.filter((item) => item.name !== name);
  setCart(newCart);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

function clearCart(setCart) {
  setCart([]);
  localStorage.removeItem('cart');
}

function redirectCart(history, setCart) {
  const timeOut = 2000;

  setTimeout(() => {
    clearCart(setCart);

    history.push('/products');
  }, timeOut);
}

export function checkoutOrder(history, setCart) {
  const cartItens = document.getElementById('cart-checkout');
  const parentDiv = cartItens.parentNode;
  const sentOrderMessage = document.createElement('span');
  const orderMessage = document.createTextNode('Compra realizada com sucesso!');
  sentOrderMessage.appendChild(orderMessage);

  parentDiv.replaceChild(sentOrderMessage, cartItens);

  redirectCart(history, setCart);
}
