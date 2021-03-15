import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from './TrybeerContext';

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [newUser, setNewUser ] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const providerValue = {
    user,
    setUser,
    newUser,
    setNewUser,
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
