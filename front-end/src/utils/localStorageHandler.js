const updateName = (name) => {
  const previousLocalStorage = JSON.parse(localStorage.getItem('user'));
  const newLocalStorage = { ...previousLocalStorage, name };
  localStorage.setItem('user', JSON.stringify(newLocalStorage));
};

const verifyUser = (history) => {
  const storage = JSON.parse(localStorage.getItem('user'));
  if (!storage) return history.push('/login');
  const { name, email } = storage;
  return { name, email }
}

// const cart = [
//   {
//     id: '',
//     name: '',
//     quantity: '',
//     price: '',
//   },
//   {

//   }
// ]

// const addProductToCart = (product) => {
//   const { id, name, price } = product;
//   const 
  

// }

// const subtractProductFromCart = () => {
  
// }

// const getProductQuantity = () => {
  
// }

module.exports = { updateName, verifyUser };
