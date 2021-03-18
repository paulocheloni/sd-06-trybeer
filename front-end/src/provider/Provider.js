import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

function TrybeerProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    console.log(cartFromLocalStorage)
    if (cartFromLocalStorage) setCart(cartFromLocalStorage);
    if (userFromLocalStorage) setUser(userFromLocalStorage);
  }, []);

  const setUserLogged = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const getFromLocalStorage = (key) => {
    const keyFromLocalStorage = JSON.parse(localStorage.getItem(key));
    return keyFromLocalStorage;
  };

  const updateProductQuantity = (id, quantity, price) => {
    console.log(cart)
    const product = { id, quantity, price };
    const cartWithoutProduct = cart.filter((item) => item.id !== id && quantity === 0);
    const newCart = [...cartWithoutProduct, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const contextValue = {
    cart,
    setCart,
    updateProductQuantity,
    getFromLocalStorage,
    user,
    setUser,
    setUserLogged,
  };

  return (
    <TrybeerContext.Provider value={ contextValue }>
      { children }
    </TrybeerContext.Provider>
  );
}

TrybeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrybeerProvider;
