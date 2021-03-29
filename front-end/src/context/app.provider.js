import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useStorage from '../hooks/useStorage';
import AppContext from './app.context';
import productsApi from '../services/api.products';

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('login')));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || {});
  const [products, setProducts] = useState(null);
  const updateLogin = useStorage('login');
  const updateCart = useStorage('cart');

  useEffect(() => {
    updateLogin(token);
  }, [token, updateLogin]);

  useEffect(() => {
    updateCart(cart);
  }, [cart, updateCart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsArray = await productsApi(token);
        setProducts(productsArray);
      } catch (error) {
        console.log('error caught:', error);
        return null;
      }
    };
    if (token && token.token) fetchProducts();
  }, [token]);

  return (
    <AppContext.Provider
      value={ {
        productsContext: { products },
        tokenContext: { token, setToken },
        cartContext: { cart, setCart },
      } }
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default AppProvider;
