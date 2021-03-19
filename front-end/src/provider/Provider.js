import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

function TrybeerProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (cartFromLocalStorage) setCart(cartFromLocalStorage);
    if (userFromLocalStorage) setUser(userFromLocalStorage);
  }, []);

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

  const getFromLocalStorage = (key) => {
    const keyFromLocalStorage = JSON.parse(localStorage.getItem(key));
    return keyFromLocalStorage;
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
