import React, { useState, useEffect } from 'react';

import { loginUser } from '../../Services/Apis';

import Container from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(email);
    const six = 6;
    const minPasswordLength = password.length >= six;
    if (emailFormat && minPasswordLength) {
      setIsDisabled(false);
    }
  }, [email, password]);

  const saveLocalStorage = (res) => {
    localStorage.setItem('user', JSON.stringify(res));
  };

  // const logout = () => {
  //   localStorage.removeItem('user');
  // };

  const userRegistered = () => {
    window.location.href = '/register';
  };

  const handleRedirect = () => {
    const userRole = localStorage.getItem('user');

    const role = JSON.parse(userRole);

    if (role.role === 'client') {
      window.location.href = '/';
    } else {
      window.location.href = '/';
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = await loginUser(email, password);

    saveLocalStorage(user);

    handleRedirect();
  };

  return (
    <Container>
      <form onSubmit={ handleSubmit }>
        <h1>Login</h1>
        <Input
          placeholder="Email"
          width="400px"
          heigth="40px"
          fontSize="16px"
          onChange={ ({ target }) => setEmail(target.value) }
          dataTestid="email-input"
        />
        <Input
          placeholder="Senha"
          width="400px"
          heigth="40px"
          fontSize="16px"
          onChange={ ({ target }) => setPassword(target.value) }
          dataTestid="password-input"
        />
        <Button
          type="submit"
          width="400px"
          heigth="40px"
          color="green"
          fontSize="20px"
          disabled={ isDisabled }
          dataTestid="signin-btn"
        >
          ENTRAR
        </Button>
        <Button
          type="button"
          width="400px"
          heigth="40px"
          fontSize="16px"
          dataTestid="no-account-btn"
          onClick={ userRegistered }
        >
          Ainda não tenho conta
        </Button>
      </form>
    </Container>
  );
};

export default Login;
