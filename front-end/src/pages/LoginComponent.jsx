import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import BeersAppContext from '../context/BeersAppContext';
import fetchApiJsonBody from '../service/fetchApi';

import '../style/LoginRegister.css';

function Login() {
  const {
    setUser,
  } = useContext(BeersAppContext);

  const [valid, setValid] = useState(true);
  const [inputValues, setInputValues] = useState({ email: '', password: '' });
  const [errMessage, setErrMessage] = useState('');

  const history = useHistory();

  useEffect(()=> {
    const isValid = async () => {
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      const email = emailRegex.test(inputValues.email);
      const password = inputValues.password;
      const minLength = 6;
      if(password.length >= minLength && email) {
        setValid(false)
      } else {
        setValid(true)
      }
    };
    isValid();
  }, [inputValues.password, inputValues.email]);

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]: target.value});
  };

  const handleClick = async () => {
    const ola = await fetchApiJsonBody('/login', inputValues);
    console.log('ola', ola)
    if(ola.err) {
      console.log('entrou no erro')
      setErrMessage(ola.err);
      return;
    }
    setUser(ola)
    if(ola.role === 'administrator') {
      console.log('entrou no admin')
      history.push('/admin/orders');
    } else if(ola.role === 'client') {
      console.log('entrou no client')
      history.push('products');
    }
  };

  return(
    <div className='login-register'>
      <img src={require('../images/logo_provisorio.png')} className='img-logo-login' />
      <form>
        <label htmlFor="email">
          Email
          <br />
          <input
            data-testid="email-input"
            type="email"
            id="email"
            name="email"
            value={ inputValues.email }
            onChange={ handleChange }
          />
        </label>
        <br />
        <label htmlFor="pass">
          Senha
          <br />
          <input
            type="password"
            id="pass"
            name="password"
            value={ inputValues.password }
            onChange={ handleChange }
            data-testid="password-input"
          />
        </label>
        <br />
        <span>{errMessage}</span>
        <button
          data-testid="signin-btn"
          id="enter"
          type="button"
          disabled = { valid }
          onClick={ handleClick }
        >
          ENTRAR
        </button>
        <br />
        <button
          data-testid="no-account-btn"
          id="sign-up"
          type="button"
          onClick={ () => history.push('/register') }
          className='bttn-text'
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  )
};

export default Login;
