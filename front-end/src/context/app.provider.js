import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './app.context';

import useStorage from '../hooks/useStorage';

const AppProvider = ({ children }) => {
  const [token, setToken] = useState({});
  const setLoginStorage = useStorage('login');

  useEffect(() => {
    setLoginStorage(token);
  }, [token, setLoginStorage]);

  const state = {
    token,
    setToken,
  };

  return (
    <AppContext.Provider value={ state }>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default AppProvider;
