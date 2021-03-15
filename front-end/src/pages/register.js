import React, { useState } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState('client');

  const history = useHistory();
  
  const registerUser = () => {
    api.createUser(name, email, password, checkbox)
      .then((response) => {
        console.log(`usuario ${response.data} criado com sucesso!`);
        if (checkbox === 'admin') {
          history.push('/admin/orders');
        }
        if (checkbox === 'client') {
          history.push('/products');
        }
      }).catch((err) => {
        console.log(err.response.data);
      });
  }

  const checkboxFunc = (e) => {
    setCheckbox(e.target.value);
    if (checkbox === 'client') return setCheckbox('admin');
    if (checkbox === 'admin') return setCheckbox('client');
  }

  return (
    <div>
      <h1>Register</h1>
      <label htmlFor="signup-name">
        Nome
        <input
          type="text"
          data-testid="signup-name"
          placeholder="digite seu Nome"
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <label htmlFor="signup-email">
        Email
        <input
          type="text"
          data-testid="signup-email"
          placeholder="digite seu Email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="signup-password">
        Senha
        <input
          type="text"
          data-testid="signup-password"
          placeholder="digite seu Password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <label htmlFor="signup-seller">
        <input
          type="checkbox"
          data-testid="signup-seller"
          value={ checkbox }
          onChange={ checkboxFunc }
        />
        Quero Vender
      </label>
      <button
        type="button"
        data-testid="signup-btn"
        onClick={ registerUser }
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Register;
