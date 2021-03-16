import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

function TrybeerProvider({ children }) {
  const [cart, setCart] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const contextValue = {
    cart,
    setCart,
    email,
    setEmail,
    password,
    setPassword,
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
