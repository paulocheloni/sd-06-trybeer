import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [menuStatus, setMenuStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    menuStatus,
    setMenuStatus,
  };

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
