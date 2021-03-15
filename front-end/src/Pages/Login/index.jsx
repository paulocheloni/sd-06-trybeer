import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { loginUser } from '../../Services/Apis';

import Container from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

const saveLocalStorage = (res) => {
  localStorage.setItem('user', JSON.stringify(res));
};

const handleSubmit = async ([event, email, password, history]) => {
  event.preventDefault();
  const user = await loginUser(email, password);
  console.log(user);
  saveLocalStorage(user);
  history.push((user.role === 'client') ? '/products' : '/admin/orders');
};

const userRegistered = () => {
  window.location.href = '/register';
};

const form = (params) => {
  const { setEmail, setPassword, isDisabled, email, password, history } = params;
  return (
    <form onSubmit={ (e) => handleSubmit([e, email, password, history]) }>
      <h1>Login</h1>
      <Input
        id="email"
        label="Email"
        dataTestid="email-input"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <Input
        id="senha"
        label="Senha"
        dataTestid="password-input"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <Button
        type="submit"
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
        heigth="40px"
        fontSize="16px"
        dataTestid="no-account-btn"
        onClick={ userRegistered }
      >
        Ainda não tenho conta
      </Button>
    </form>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const emailFormat = /\S+@\S+\.\S+/.test(email);
    const six = 6;
    const minPasswordLength = password.length >= six;

    setIsDisabled(!(emailFormat && minPasswordLength));
  }, [email, password]);

  const params = {
    setEmail, setPassword, isDisabled, email, password, history,
  };
  return (
    <Container>
      {form(params)}
    </Container>
  );
};

export default Login;
