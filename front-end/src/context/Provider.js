import React, { useState } from 'react';
import propTypes from 'prop-types';
import GlobalContext from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
  };

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
