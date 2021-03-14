import React, { useState, useEffect } from 'react';

import { Redirect, useHistory } from 'react-router-dom';
import { loginUser } from '../../Services/Apis';

import Container from './styles';

// import Input from '../../Components/Input';
import Button from '../../Components/Button';

const handleRedirect = (history, setRole) => {
  const userRole = localStorage.getItem('user');

  const { role } = JSON.parse(userRole);
  // if (role === 'client') { <Redirect to="/products" />; }
  setRole(role);
  // history.push((role === 'client') ? '/products' : '/admin/orders');
  // window.location.href = (role === 'client') ? '/products' : '/admin/orders';
};

const saveLocalStorage = (res) => {
  localStorage.setItem('user', JSON.stringify(res));
};

const handleSubmit = async ([event, email, password, history, setRole]) => {
  event.preventDefault();
  const user = await loginUser(email, password);
  saveLocalStorage(user);

  handleRedirect(history, setRole);
};

const userRegistered = () => {
  window.location.href = '/register';
};

const form = (params) => {
  const { setEmail, setPassword, isDisabled, email, password, history, setRole } = params;
  return (
    <form onSubmit={ (e) => handleSubmit([e, email, password, history, setRole]) }>
      <h1>Login</h1>
      <label htmlFor="email">
        Email
        <input
          id="email"
          placeholder="Email"
          // width="400px"
          // heigth="40px"
          // fontSize="16px"
          onChange={ ({ target }) => setEmail(target.value) }
          data-testid="email-input"
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          id="senha"
          placeholder="Senha"
          // width="400px"
          // heigth="40px"
          // fontSize="16px"
          onChange={ ({ target }) => setPassword(target.value) }
          data-testid="password-input"
        />
      </label>
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
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const emailFormat = /\S+@\S+\.\S+/.test(email);
    const six = 6;
    const minPasswordLength = password.length >= six;
    if (emailFormat && minPasswordLength) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const params = {
    setEmail, setPassword, isDisabled, email, password, history, setRole,
  };
  const path = (role === 'client') ? '/products' : '/admin/orders';
  return (
    <Container>
      {role && <Redirect to={ path } /> }
      {form(params)}
    </Container>
  );
};

export default Login;
