import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          id="email"
          data-testid="email-input"
          onChange={}
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          data-testid="password-input"
          onChange={}
        />
      </label>
      <Link>
        <button
          type="button"
          data-testid="signin-btn"
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
