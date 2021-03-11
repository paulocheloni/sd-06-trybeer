import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
    if (regex.test(value.toLowerCase())) {
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

  return (
    <div className="login">
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          id="email"
          data-testid="email-input"
          onChange={ handleChangeEmail }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          data-testid="password-input"
          onChange={ handleChangePassword }
        />
      </label>
      <Link>
        <button
          type="button"
          data-testid="signin-btn"
          disabled={ !(isEmailValid && isPasswordValid) }
          onClick={}
        >
          Entrar
        </button>
      </Link>
      <Link>
        <button
          type="button"
          data-testid="no-account-btn"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  )
};
