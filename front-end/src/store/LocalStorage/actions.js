export const updateName = (name) => {
  const previousLocalStorage = JSON.parse(localStorage.getItem('user'));
  const newLocalStorage = { ...previousLocalStorage, name };
  localStorage.setItem('user', JSON.stringify(newLocalStorage));
};

export const setCart = (newStorage) => (
  localStorage.setItem('cart', JSON.stringify(newStorage)));

export const addItem = (cartItem, setCartItem) => {
  if (cartItem === '') {
    const newProduct = { ...cartItem, quantity: 1, default_product: false };
    return setCartItem(newProduct);
  }

  const product = {
    ...cartItem,
    quantity:
    cartItem.quantity + 1,
    default_product: false };
  return setCartItem(product);
};

export const subtractItem = (cartItem, setCartItem) => {
  if (cartItem === '') {
    return console.log('produto não existe ainda');
  }
  if (cartItem.quantity > 0) {
    const product = {
      ...cartItem, quantity: cartItem.quantity - 1, default_product: false };
    return setCartItem(product);
  }
};

export const verifyUser = (history) => {
  const storage = JSON.parse(localStorage.getItem('user'));
  if (!storage) return history.push('/login');
  const { name, email } = storage;
  return { name, email };
};
