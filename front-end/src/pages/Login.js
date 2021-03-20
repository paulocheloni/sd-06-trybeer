import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';

import AppContext from '../context/app.context';

import { Topbar } from '../components';

import registerUser from '../services/api.registerUser';

const passwordLength = 6;

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(passwordLength).required(),
});

export default function Login() {
  const { test } = useContext(AppContext);
  const [disableBtn, setDisableBtn] = useState(true);
  const [login, setLogin] = useState({});
  const history = useHistory();

  useEffect(() => {
    const validateForm = async () => {
      const valid = await schema.isValid(login)
        .then((result) => result);
      if (valid === disableBtn) setDisableBtn(!valid);
    };
    validateForm();
  }, [login]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = await schema.isValid(login);
    if (valid) {
      const newUser = await registerUser({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: login,
      });

      if (newUser && newUser.role === 'administrator') {
        history.push('/admin/orders');
      } else if (newUser && newUser.role === 'client') {
        history.push('/products');
      }
    }
  };

  return (
    <div>
      <Topbar />
      <div>{test}</div>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ (e) => setLogin({ ...login, email: e.target.value }) }
            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ (e) => setLogin({ ...login, password: e.target.value }) }
            />
          </label>
          <button type="submit" data-testid="signin-btn" disabled={ disableBtn }>
            Entrar
          </button>
          <Link to="/register">
            <button type="button" data-testid="no-account-btn">
              Ainda não tenho conta
            </button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
