import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [validForm, setValidForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    function validateForm(email, password) {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      emailRegex.test(email) && password.length > 5
      ? setValidForm(true)
      : setValidForm(false);
    }
    validateForm(email, password);
  }, [email, password]);

  const contextValue = {
    validForm,
    setValidForm,
    email,
    setEmail,
    password,
    setPassword,
  }
  
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;
