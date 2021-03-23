import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import useStorage from '../hooks/useStorage';
import AppContext from './app.context';

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('login')));
  const [products, setProducts] = useState([]);
  const updateLogin = useStorage('login');

  const productsContext = useMemo(() => (
    { products, setProducts }
  ), [products, setProducts]);

  const tokenContext = useMemo(() => ({ token, setToken }), [token, setToken]);

  useEffect(() => {
    updateLogin(token);
  }, [token, updateLogin]);

  return (
    <AppContext.Provider value={ { productsContext, tokenContext } }>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default AppProvider;
