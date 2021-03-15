import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

// Components
import validateEmailAndPassword from '../components/validateEmailAndPassword'

// Services
import { saveState } from '../services/localStorage';
import api from '../services/api';
import RedirectPage from '../components/redirectPage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

  const validates = (email, password) => {
    if (!validateEmailAndPassword(email, password)) {
      return setDisabled(false);
    }
    return setDisabled(true);
  };

  useEffect(() => {
    validates(email, password);
  }, [email, password]);

  const InsertUserLocalStorage = () => {
    api.listLogin(email, password)
      .then((response) => {
        saveState('user', response.data);
        if (response.data.role === 'administrator') {
          history.push('/admin/orders');
        }
        if (response.data.role === 'client') {
          history.push('/products');
        }
      }).catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <label htmlFor="email-input">
        Email
        <input
          type="text"
          data-testid="email-input"
          placeholder="digite seu Email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          type="text"
          data-testid="password-input"
          placeholder="digite seu Password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="signin-btn"
        disabled={ disabled }
        onClick={ InsertUserLocalStorage }
      >
        ENTRAR
      </button>
      <RedirectPage
        rota="/register"
        id="no-account-btn"
        conteudo="Ainda não tenho conta"
        data-testid="no-account-btn"
      />
    </div>
  );
}

export default Login;
