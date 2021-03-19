import React, { useEffect, useState } from 'react';

import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    image: 'http://localhost:3001/images/Heineken 600ml.jpg',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    image: 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg',
  },
];
// const seta = [{"id":1,"name":"Skol Lata 250ml","price":2.2,"image":"http://localhost:3001/images/Skol Lata 350ml.jpg","quantity":3},{"id":2,"name":"Heineken 600ml","price":7.5,"image":"http://localhost:3001/images/Heineken 600ml.jpg","quantity":0},{"id":3,"name":"Antarctica Pilsen 300ml","price":2.49,"image":"http://localhost:3001/images/Antarctica Pilsen 300ml.jpg","quantity":0}]
// localStorage.cart = JSON.stringify(seta);

// const storage = localStorage.cart ? JSON.parse(localStorage.cart) : [];

// const initialState = { cartItems: storage };

// const reducer = (state, action) => {
//   switch (action.type) {
//   case 'increase':
//     const selectItem = !state.cartItems.find((item) => item.id === action.product.id);
//     if (selectItem) {
//       setQuantity(quantity + 1);
//       state.cartItems.push({
//         ...action.product,
//         quantity,
//       });
//     }
    // if (!state.cartItems.find((item) => item.id === action.product.id)) {
    //   const quantity = 1;
    //   state.cartItems.push({
    //     ...action.product,
    //     quantity,
    //   });
    //   localStorage.cart = JSON.stringify(state.cartItems);
    //   break;
    // } else {
    //   state.cartItems[state.cartItems
    //     .findIndex((item) => item.id === action.product.id)].quantity += 1;
    //   localStorage.cart = JSON.stringify(state.cartItems);
    // }

    // return {
    //   ...state,
    //   cartItems: [...state.cartItems],
    // };
//   case 'decrease':
//     return { quantity: state.quantity - 1 };
//   default:
//     throw new Error();
//   }
// };

const ProductsList = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [quantity] = useState(1);
  const [cart, setCart] = useState([]);
  // localStorage.cart = JSON.stringify([]);
  useEffect(() => {
    console.log('cart:', cart);
    console.log('localStorage:', localStorage.cart);
  }, [cart]);

  const plusItemCart = (product) => {
    const currentProduct = cart.find((item) => item.id === product.id) || {
      ...product,
      quantity: 0,
    };

    currentProduct.quantity = currentProduct.quantity + 1;
    console.log('currentProduct:', currentProduct);
    const cartMap = cart.map((item) => item.id === product.id ? currentProduct : item);
    console.log('cartMap:', cartMap);
    const newCart = cart.length > 1 ? cartMap : [currentProduct];
    console.log('newCart', newCart);
    setCart(newCart);
    localStorage.cart = JSON.stringify(newCart); 
    // if (!currentProduct) {
    //   const handleQuantityOfCart = {
    //     ...product,
    //     quantity,
    //   };
    //   console.log('handleQuantityOfCart:', handleQuantityOfCart)
    //   setCart([...cart, handleQuantityOfCart]);
    //   localStorage.cart = JSON.stringify(cart);
    //   // localStorage.setItem('cart', cart);
    // } else {
    //   const productId = cart.findIndex((item) => item.id === product.id);
    //   console.log('productId:', productId);
    //   cart[productId].quantity += 1;
    //   setCart([...cart]);
    //   localStorage.cart = JSON.stringify(cart);
    //   // localStorage.setItem('cart', cart);
    // }
  };

  const minusItemCart = (product) => {
    cart[cart.findIndex((item) => item.id === product.id)].quantity -= 1;
    setCart([...cart])
    localStorage.cart = JSON.stringify(cart);
  };

  const handleItem = (product) => {
    const itemsCart = JSON.parse(localStorage.cart);
    console.log('itemsCart', itemsCart);
    if (itemsCart.length !== 0){
      const handleQuantity = itemsCart.map(item => {
        if (item.id === product.id) {
          return item.quantity;
        }
        return true;
      });
      return handleQuantity;
    }

    return 0;
  }

  return products.map((product, index) => (
    <ProductCard
      key={ index }
      index={ index }
      product={ product }
      plusItemCart={ plusItemCart }
      minusItemCart={ minusItemCart }
      handleItem={ handleItem }
      // dispatch={ dispatch }
      // state={ state }
    />
  ));
};

export default ProductsList;
