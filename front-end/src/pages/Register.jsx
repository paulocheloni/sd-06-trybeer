import React, { useState } from 'react';
import history from '../services/history';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('client');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
    const regex = /^[A-Za-z'\s]+$/;
    if (regex.test(value)) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
    const passwordLength = 6;

    if (value.length >= passwordLength) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handleChangeCheckbox = (event) => {
    // const check = document.getElementById('checkbox');
    const { value } = event.target;
    if (value.checked) {
      setRole('administrator');
    } else {
      setRole('client');
    };
  };

  const handleClick = async () => {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, role }),
    })
      .then((res) => res.json());
    if (response.user.role === 'client') {
      history.push('/products');
    } else {
      history.push('/admin/orders');
    }
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
          onChange={ handleChangeName }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          data-testid="signup-email"
          onChange={ handleChangeEmail }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          data-testid="signup-password"
          onChange={ handleChangePassword }
        />
      </label>
      <label htmlFor="checkbox">
        Quero Vender
        <input
          type="checkbox"
          id="checkbox"
          data-testid="signup-seller"
          onClick={ handleChangeCheckbox }
        />
      </label>
      <button
        type="button"
        data-testid="signup-btn"
        disabled={ !(isEmailValid && isPasswordValid && isNameValid) }
        onClick={ handleClick }
      >
        CADASTRAR
      </button>
    </div>
  );
}
