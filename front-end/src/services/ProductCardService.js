export const localStorageCart = JSON.parse(localStorage.getItem('cart'));

function saveCart({ name, price, newQuantity, cart, setCart }) {
  const quantity = newQuantity;
  const cartProduct = cart.filter((element) => element.name !== name);

  setCart([...cartProduct, { name, price, quantity }]);

  const newCart = [...cartProduct, { name, price, quantity }];

  localStorage.setItem('cart', JSON.stringify(newCart));
}

function removeFromCart(cart, setCart, name) {
  const newCart = cart.filter((element) => element.name !== name);

  setCart(newCart);

  localStorage.setItem('cart', JSON.stringify(newCart));
}

export function handleQuantity(event, productInfo) {
  const { quantity, setQuantity, name, price, cart, setCart } = productInfo;
  const { innerHTML } = event.target;
  let newQuantity = quantity;

  if (innerHTML === '+') {
    setQuantity(quantity + 1);
    newQuantity += 1;
  }

  if (innerHTML === '-') {
    if (quantity === 1) {
      removeFromCart(cart, setCart, name);
      setQuantity(quantity - 1);
      return;
    }
    if (quantity === 0) return;

    setQuantity(quantity - 1);
    newQuantity -= 1;
  }

  saveCart({ name, price, newQuantity, cart, setCart });
}
