import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import UseContext from './UseContext';
import User from '../services/users';

const Provider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginRequest, setLoginRequest] = useState('');
  const [isDisable, setIsDisable] = useState('false');

  const api = async () => {
    const login = await User(email, password);
    await setloginRequest(login);
  };

  useEffect(() => {
    api();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    loginRequest,
    setLoginRequest,
    isDisable,
    setIsDisable,
  };

  return (
    <RecipeContext.Provider value={ contextValue }>
      { children }
    </RecipeContext.Provider>
  );
};

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
