import React, { useState } from 'react';
import BeersAppContext from './BeersAppContext';

function Provider({ children }) {
  const [user, setUser] = useState({ email: '', password: '' });

  const contextValue = {
    user,
    setUser,
  };

  return (
    <BeersAppContext.Provider value={ contextValue }>
      {children}
    </BeersAppContext.Provider>
  );
};

export default Provider;
