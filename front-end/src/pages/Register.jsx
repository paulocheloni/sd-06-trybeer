import React, { useState, useEffect } from 'react';
import InputRegister from '../components/InputRegister';
import {Redirect, useHistory} from 'react-router-dom';
import register from '../methods/register';
import { RegisterSchema } from '../validationsSchemas/register';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seller, setSeller] = useState(false);
  const [formValidated, setFormValidated] = useState(false)
  const [messageError, setMessageError] = useState('');
  const url = useHistory()

  const handleChange = async () => {
    try {
      await RegisterSchema.validate({ name, email, password });
      setFormValidated(true);      
      setMessageError('')
    } catch (err) {
      setMessageError(err.message);
      console.log(err.message, messageError)
    }
  }

  useEffect(() => {
    handleChange()

  }, [name, email, password])

  


  

  const handleClick = async () => {
    try {      
      const response = await register({ name, email, password, seller });
      if (response.message) throw response
      if (seller) {
        url.push('/admin/orders')
      } else {
        url.push('/products')
      }
    } catch (err) {
      console.log(err.message)
      setMessageError(err.message)
    }
  };

  

  return (
    <>
      <h1>Pagina de Registro</h1>
      <InputRegister
        name="name"
        setValue={ setName }
        value={ name }
        label="Nome"
      />
      <InputRegister
        name="email"
        setValue={ setEmail }
        value={ email }
        label="Email"
        type="email"
      />
      <InputRegister
        name="password"
        setValue={ setPassword }
        value={ password }
        label="Senha"
        type="password"
      />
      <InputRegister
        name="seller"
        setValue={ setSeller }
        checked={ seller }
        label="Quero vender"
        type="checkbox"
      />
      <p>{messageError !== '' ? messageError : null}</p>
      <button type="button" disabled={!formValidated} data-testid="signup-btn" onClick={ async () => handleClick() }>Cadastrar</button>
    </>
  );
}

export default Register;
