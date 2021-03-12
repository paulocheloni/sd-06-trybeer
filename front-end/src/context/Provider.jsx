import React, { useState } from 'react';
import BeersAppContext from './BeersAppContext';

function Provider({ children }) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [valid, setValid] = useState(true);

  const contextValue = {
    user,
    setUser,
    valid,
    setValid,
  };

  return (
    <BeersAppContext.Provider value={ contextValue }>
      {children}
    </BeersAppContext.Provider>
  );
};

export default Provider;
