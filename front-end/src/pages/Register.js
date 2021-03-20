import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { Topbar } from '../components';

import registerUser from '../services/api.registerUser';

import useStorage from '../hooks/useStorage';

import './Forms.css';

const passwordLength = 6;

const schema = yup.object().shape({
  name: yup.string().matches(/^[a-z ,.'-]{12,}$/i).required(),
  email: yup.string().email().required(),
  password: yup.string().min(passwordLength).required(),
});

export default function Register() {
  const [login, setLogin] = useState({});
  const [disableBtn, setDisableBtn] = useState(true);
  const [, setLoginStorage] = useStorage('login');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = await schema.isValid(login);
    if (valid) {
      const newUser = await registerUser({
        method: 'post',
        url: 'http://localhost:3001/user/register',
        data: login,
      });

      if (newUser && newUser.role) {
        setLoginStorage(newUser);
        if (newUser.role === 'administrator') history.push('/admin/orders');
        if (newUser.role === 'client') history.push('/products');
      }
      console.log(newUser);
      if (newUser.code && newUser.code === 'C_ERR_EMAIL_UNAVAIBLE') {
        history.push({
          pathname: '/error',
          state: { ...newUser } });
      }
    }
  };

  useEffect(() => {
    const validateForm = async () => {
      const valid = await schema.isValid(login)
        .then((result) => result);
      if (valid === disableBtn) setDisableBtn(!valid);
    };
    validateForm();
  }, [login]);

  return (
    <div>
      <Topbar />
      <form onSubmit={ (e) => handleSubmit(e) }>
        <fieldset>
          <legend>Registro</legend>
          <label htmlFor="nome" className="inputError">
            Nome
            <input
              type="text"
              id="nome"
              name="nome"
              data-testid="signup-name"
              onChange={ (e) => setLogin({ ...login, name: e.target.value }) }
            />
            {/* { errors.nome && <span>Nome é campo obrigatório.</span> } */}
          </label>
          <label htmlFor="email" className="inputError">
            Email
            <input
              type="email"
              id="email"
              name="email"
              data-testid="signup-email"
              onChange={ (e) => setLogin({ ...login, email: e.target.value }) }
            />
            {/* { errors.email && <span>Email é campo obrigatório.</span> } */}
          </label>
          <label htmlFor="senha" className="inputError">
            Senha
            <input
              type="password"
              id="senha"
              name="senha"
              data-testid="signup-password"
              onChange={ (e) => setLogin({ ...login, password: e.target.value }) }
            />
            {/* { errors.senha && <span>Senha é campo obrigatório.</span> } */}
          </label>
          <label htmlFor="quero-vender" className="inputError">
            <input
              type="checkbox"
              data-testid="signup-seller"
              onClick={ (e) => setLogin({ ...login, isVendor: e.target.checked }) }
            />
            Quero vender
          </label>
          <button type="submit" data-testid="signup-btn" disabled={ disableBtn }>
            Cadastrar
          </button>
        </fieldset>
      </form>
    </div>
  );
}
