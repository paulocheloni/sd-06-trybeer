function handleQuantity(event, quantity, setQuantity) {
  const { innerHTML } = event.target;
  if (innerHTML ==='+') {
    setQuantity(quantity + 1);
  }
  if (innerHTML ==='-') {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  }
}

function saveCartState(cart, setCart) {
  //
}

export default handleQuantity;
