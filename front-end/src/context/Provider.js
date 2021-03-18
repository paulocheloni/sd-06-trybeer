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
  const [registerIsDisabled, setRegisterIsDisabled] = useState('');

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  };

  const setUser = (data) => {
    const user = localStorage.setItem('user', JSON.stringify(data));
    console.log(getUser());
    return user;
  };

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
    getUser,
    setUser,
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
