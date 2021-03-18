export function saveCart({ name, price, newQuantity, cart, setCart }) {
  const quantity = newQuantity;
  const cartProduct = cart.filter((element) => element.name !== name);
  setCart([...cartProduct, {name, price, quantity}]);
}

function removeFromCart(cart, setCart, name) {
  const newCart = cart.filter((element) => element.name !== name);
  setCart(newCart);
}

export function handleQuantity(event, { quantity, setQuantity, name, price, cart, setCart }) {
  const { innerHTML } = event.target;
  let newQuantity = quantity;

  if (innerHTML ==='+') {
    setQuantity(quantity + 1);
    newQuantity += 1;
  }

  if (innerHTML ==='-') {
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

export default handleQuantity;
