import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

function TrybeerProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  const getFromLocalStorage = (key) => {
    const keyFromLocalStorage = JSON.parse(localStorage.getItem(key));
    if (!keyFromLocalStorage) return null;
    return keyFromLocalStorage;
  };

  useEffect(() => {
    if (getFromLocalStorage('cart')) setCart(getFromLocalStorage('cart'));
    if (getFromLocalStorage('user')) setUser(getFromLocalStorage('user'));
  }, []);

  const setUserLogged = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const eraseLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  const updateProductQuantity = (id, quantity, price) => {
    const product = { id, quantity, price };
    const cartWithoutProduct = cart.filter((item) => item.id !== id);
    const newCart = [...cartWithoutProduct, product];
    const cartWithoutZeroQuantities = newCart.filter((item) => item.quantity > 0);
    setCart(cartWithoutZeroQuantities);
    localStorage.setItem('cart', JSON.stringify(cartWithoutZeroQuantities));
  };

  const contextValue = {
    cart,
    setCart,
    updateProductQuantity,
    getFromLocalStorage,
    user,
    setUser,
    setUserLogged,
    eraseLocalStorage,
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
