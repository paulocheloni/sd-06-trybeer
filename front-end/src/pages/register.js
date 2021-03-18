import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';

// Components
import validateEmailAndPassword from '../resources/validateEmailAndPassword';

// Services
import api from '../services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState('client');
  const [disabled, setDisabled] = useState(true);
  const [emailExists, setEmailExists] = useState(false);

  const history = useHistory();

  const validates = useCallback(() => {
    const regex = /^[a-zA-Z ]{2,30}$/;
    const eleven = 11;
    if (!validateEmailAndPassword(email, password)
      && regex.test(name)
      && name.length > eleven) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [email, password, name]);

  useEffect(() => {
    validates();
  }, [email, password, name, validates]);

  const registerUser = () => {
    api.createUser(name, email, password, checkbox)
      .then((response) => {
        console.log(`usuario ${response.data} criado com sucesso!`);
        if (checkbox === 'administrator') {
          history.push('/admin/orders');
        }
        if (checkbox === 'client') {
          history.push('/products');
        }
      }).catch(() => {
        setEmailExists(true);
      });
  };

  const checkboxFunc = (e) => {
    setCheckbox(e.target.value);
    if (checkbox === 'client') return setCheckbox('administrator');
    if (checkbox === 'administrator') return setCheckbox('client');
  };

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
        Quero vender
      </label>
      <button
        type="button"
        data-testid="signup-btn"
        disabled={ disabled }
        onClick={ registerUser }
      >
        Cadastrar
      </button>
      {
        emailExists && <> E-mail already in database. </>
      }
    </div>
  );
}

export default Register;
