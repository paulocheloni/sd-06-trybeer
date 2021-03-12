import React, { useState, useEffect } from 'react';
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

  const handleRedirect = () => {
    alert('Funciona');
  };

  return (
    <Container>
      <form onSubmit={ handleRedirect }>
        <h1>Login</h1>
        <Input
          placeholder="Email"
          width="400px"
          heigth="40px"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <Input
          placeholder="Senha"
          width="400px"
          heigth="40px"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <Button
          type="submit"
          width="400px"
          heigth="40px"
          color="greenyellow"
          disabled={ isDisabled }
        >
          ENTRAR
        </Button>
        <Button type="submit" width="400px" heigth="40px">Ainda não tenho conta</Button>
      </form>
    </Container>
  );
};

export default Login;
