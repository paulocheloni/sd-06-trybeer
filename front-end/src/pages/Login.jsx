import React, { useState } from 'react';
import history from '../services/history';
import './Login.css';

export default function Login() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    const passwordLength = 6;

    if (value.length >= passwordLength) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handleClick = () => {
    history.push('/products');
  };

  const handleNoCount = () => {
    history.push('/register');
  };

  return (
    <div className="login">
      <label htmlFor="email">
        <h1>Login</h1>
        <input
          className="user"
          placeholder="E-mail"
          type="email"
          id="email"
          data-testid="email-input"
          onChange={ handleChangeEmail }
        />
      </label>
      <label htmlFor="password">
        <input
          className="boxsign"
          placeholder="Senha"
          type="password"
          id="password"
          data-testid="password-input"
          onChange={ handleChangePassword }
        />
      </label>
      <button
        className="go"
        type="button"
        data-testid="signin-btn"
        disabled={ !(isEmailValid && isPasswordValid) }
        onClick={ handleClick }
      >
        <span>ENTRAR</span>
      </button>
      <button
        className="cadastrar"
        type="button"
        data-testid="no-account-btn"
        onClick={ handleNoCount }
      >
        <span>Ainda não tenho conta!</span>
      </button>
    </div>
  );
}
