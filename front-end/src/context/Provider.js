import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState('');

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    token,
    setToken,
    setUserData,
    userData,
  };

  function saveCart() {
    const cartToSave = JSON.stringify(cartItems);
    localStorage.setItem('cart', cartToSave);
  }

  function recoveryCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) setCartItems(cart);
  }

  function saveUser() {
    const userToSave = JSON.stringify(userData);
    localStorage.setItem('user', userToSave);
  }

  function recoveryUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setUserData(user);
  }

  useEffect(() => {
    recoveryCart();
    recoveryUser();
  }, []);

  useEffect(() => {
    saveCart();
  }, [cartItems]);

  useEffect(() => {
    saveUser();
  }, [userData]);

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
