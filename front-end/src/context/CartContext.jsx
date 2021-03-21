import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.cart);
    const storage = storageCart !== [] ? storageCart : [];
    setCart(storage);
  }, []);

  return (
    <CartContext.Provider value={ { cart, setCart } }>
      { children }
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContextProvider;
