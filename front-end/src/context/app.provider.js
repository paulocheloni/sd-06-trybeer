import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './app.context';

const AppProvider = ({ children }) => {
  const [test, setTest] = useState('teste');
  const state = {
    test,
    setTest,
  };

  return (
    <AppContext.Provider value={ state }>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default AppProvider;
