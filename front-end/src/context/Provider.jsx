import React, { useState, useEffect } from 'react';
import { saveStorage, loadStorage } from '../service/localStorage';
import BeersAppContext from './BeersAppContext';

function Provider({ children }) {
  const [user, setUser] = useState(loadStorage('user', {}));

  useEffect(() => {
    saveStorage('user', user)
  }, [user])

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
