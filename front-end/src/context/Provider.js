import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextBeer from './ContextBeer';

function Provider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerIsDisabled, setregisterIsDisabled] = useState('');

  const contextData = {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    isDisabled,
    setIsDisabled,
    registerName,
    setRegisterName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerIsDisabled,
    setregisterIsDisabled,

  };

  return (
    <ContextBeer.Provider value={ contextData }>
      { children }
    </ContextBeer.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
