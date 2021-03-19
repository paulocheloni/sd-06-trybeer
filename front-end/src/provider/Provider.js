import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import TrybeerContext from '../context/TrybeerContext';

const getFromLocalStorage = (key) => {
  const keyFromLocalStorage = JSON.parse(localStorage.getItem(key));
  return keyFromLocalStorage;
};

function TrybeerProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const cartFromLocalStorage = getFromLocalStorage('cart');
    if (cartFromLocalStorage) return cartFromLocalStorage;
    return [];
  });

  const [user, setUser] = useState(() => {
    const userFromLocalStorage = getFromLocalStorage('user');
    if (userFromLocalStorage) return userFromLocalStorage;
    return {};
  });

  const setUserLogged = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const getTotalPriceCart = () => {
    if (cart.length > 0) {
      const total = cart
        .reduce((result, product) => result + (product.quantity * product.price), 0);
      return total.toFixed(2);
    }
    return 0;
  };

  const removeItemCart = (id) => {
    const cartWithoutItem = cart.filter((item) => item.id !== id);
    setCart(cartWithoutItem);
    localStorage.setItem('cart', JSON.stringify(cartWithoutItem));
  };

  const updateProductQuantity = (id, name, quantity, price) => {
    const product = { id, name, quantity, price };
    const cartWithoutProduct = cart.filter((item) => item.id !== id);
    const newCart = [...cartWithoutProduct, product];
    const cartWithValidQuantitys = newCart.filter((item) => item.quantity > 0);
    setCart(cartWithValidQuantitys);
    localStorage.setItem('cart', JSON.stringify(cartWithValidQuantitys));

  const eraseLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  const contextValue = {
    cart,
    setCart,
    updateProductQuantity,
    getFromLocalStorage,
    removeItemCart,
    getTotalPriceCart,
    user,
    setUser,
    setUserLogged,
    // verifyIfUserIsLogged,
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
