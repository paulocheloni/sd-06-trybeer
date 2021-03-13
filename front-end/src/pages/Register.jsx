import React, { useState } from 'react';

export default function Register() {
  const [role, setRole] = useState('client');

  // const regexName = /^[A-Za-z'\s]+$/;

  const handleCheckbox = () => {
    const check = document.getElementById('checkbox');
    if (check.checked) {
      setRole('administrator');
    } else {
      setRole('client');
    };
  };

  return (
    <div>
      <h1>Register</h1>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          data-testid="signup-name"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          data-testid="signup-email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          data-testid="signup-password"
        />
      </label>
      <label htmlFor="checkbox">
        Quero Vender
        <input
          type="checkbox"
          id="checkbox"
          data-testid="signup-seller"
          onClick={ handleCheckbox }
        />
      </label>
      <button
        type="button"
        data-testid="signup-btn"
      >
        CADASTRAR
      </button>
    </div>
  );
}
