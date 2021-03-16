import React, { useContext, useEffect, useState } from 'react';

import BeersAppContext from '../context/BeersAppContext';
import fetchApiJsonBody from '../service/fetchApi';
import funcValidations from '../service/funcValidations'

import '../style/LoginRegister.css';

function Signup({ history }) {
  const {
    setUser,
  } = useContext(BeersAppContext);

  const [checked, setChecked] = useState(false);
  const [valid, setValid] = useState(true);
  const [inputValues, setInputValues] = useState({ name: '', email: '', password: '', role: 'client' });
  const [errMessage, setErrMessage] = useState('');
  
  const handleCheck = () => setChecked(!checked);

  useEffect(() => {
    if (checked) {
      setInputValues({ ...inputValues, role: 'administrator' })
    } else {
      setInputValues({ ...inputValues, role: 'client' })
    }
  }, [checked])
  
  const isValid = () => {
    const email = funcValidations.validateEmail(inputValues.email);
    const password = funcValidations.validatePassword(inputValues.password);
    const name = funcValidations.validateName(inputValues.name);
    if(email && name && password) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  
  useEffect(()=> {
    isValid();
  }, [inputValues.name, inputValues.password, inputValues.email]);

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]: target.value});
  };

  const handleClick = async () => {
    const ola = await fetchApiJsonBody('/register', inputValues);
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

    // if(checked === true) {
    //   history.push('admin/Home');
    // } else {
    //   history.push('/products');
    // };
  };

  return(
    <div className='login-register'>
      {console.log('inputValues', inputValues)}
      <form>
        <label htmlFor="name">
          Nome
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={ inputValues.name }
            data-testid="signup-name"
            onChange={ handleChange }
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={ inputValues.email }
            data-testid="signup-email"
            onChange={ handleChange }
          />
        </label>
        <br />
        <label htmlFor="password">
          Senha
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={ inputValues.password }
            data-testid="signup-password"
            onChange={ handleChange }
          />
        </label>
        <br />
        <label htmlFor="vender">
          Quero vender
          <input
            type="checkbox"
            data-testid="signup-seller"
            defaultChecked={ checked }
            onChange={ handleCheck }
          />
        </label>
        <br />
        <span>{errMessage}</span>
        <button
          id="sign-up"
          type="button"
          data-testid="signup-btn"
          disabled={ valid }
          onClick={ handleClick }
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
};

export default Signup;
