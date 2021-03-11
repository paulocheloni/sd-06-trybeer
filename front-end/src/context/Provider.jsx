import React, { useState } from 'react';
import BeersAppContext from './BeersAppContext';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const contextValue = {
    login: {
      email,
      setEmail,
      password,
      setPassword,
    }
  };

  return (
    <BeersAppContext.Provider value={ contextValue }>
      {children}
    </BeersAppContext.Provider>
  );
};

export default Provider;
