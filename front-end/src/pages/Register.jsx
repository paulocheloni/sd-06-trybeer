import React, { useState } from 'react';
// import { setConstantValue } from 'typescript';
import useInput from '../hooks/useInput';
// import { nameValidation } from '../utils/validations';

export default function Register() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [name, setName] = useInput('');
  const [role, setRole] = useState('client');

  const handleCheckbox = () => {
    const role = document.getElementById('sell');
    if (role.checked) setRole('administrator');
    else setRole('client');
  };

  return (
    <form>
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            data-testid="signup-name"
            type="text"
            value={ name }
            onChange={ setName }
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            id="email"
            data-testid="signup-email"
            type="text"
            value={ email }
            onChange={ setEmail }
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            data-testid="signup-password"
            type="text"
            value={ password }
            onChange={ setPassword }
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="sell">
          Quero vender
          <input
            id="sell"
            data-testid="signup-seller"
            type="checkbox"
            onClick={ handleCheckbox }
          />
        </label>
        <button
          id="signup"
          data-testid="signup-btn"
          type="button"
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
}
