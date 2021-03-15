import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UseContext from '../hooks/UseContext';
import { validateUser } from '../services/users';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <LoginForm
      handleSubmit={ handleSubmit }
      history={ history }
      disabled={ disabled }
      email={ email }
      setEmail={ setEmail }
      password={ password }
      setPassword={ setPassword }
    />
  );
}

export default Login;
