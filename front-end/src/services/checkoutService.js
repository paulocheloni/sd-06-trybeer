export function removeCheckoutItem(name, cart, setCart) {
  const newCart = cart.filter((item) => item.name !== name);
  setCart(newCart); // state global
  localStorage.setItem('cart', JSON.stringify(newCart));
}
