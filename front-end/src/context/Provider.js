import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [validForm, setValidForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const maxLength = 5;
    function validateForm(emailInput, passwordInput) {
      const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (emailRegex.test(emailInput)
        && passwordInput.length > maxLength) return setValidForm(true);
      setValidForm(false);
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
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.element.isRequired };

export default Provider;
