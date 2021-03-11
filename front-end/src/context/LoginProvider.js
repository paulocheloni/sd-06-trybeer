import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from './TrybeerContext.js';

const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState('');
  const providerValue = {
    email, setEmail, password, setPassword,
  };
  return (
    <TrybeerContext.Provider value={ providerValue }>
      { children }
    </TrybeerContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LoginProvider;
