import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from "react-router";
// Services
import { saveState } from '../services/localStorage';
import api from '../services/api';
import RedirectPage from '../components/redirectPage';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();
  
  useEffect(() => {
    validateEmailAndPassword(email, password)
  }, [email, password]);


  const validateEmailAndPassword = (email, password) => {
    // const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/gi;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i;

    if (regex.test(email) && password.length > 5) {
      return setDisabled(false)
    } else {
      setDisabled(true)
    }
  }


  const InsertUserLocalStorage = () => {
    api.listLogin(email, password)
      .then((response) => {
        saveState('user', response.data);
        if (response.data.role === 'administrator') {
          console.log(`admin`)
          history.push('/admin/orders');
        } 
        if (response.data.role === 'client') {
          console.log(`clientes`)
          history.push('/produtos');
        } 
      }).catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <input type='text' data-testid="email-input" placeholder='digite seu Email' onChange={(e) => setEmail(e.target.value)} />
      <input type='text' data-testid="password-input" placeholder='digite seu Password' onChange={(e) => setPassword(e.target.value)} />
      <button type='button' data-testid="signin-btn" disabled={disabled}  onClick={InsertUserLocalStorage}> Login </button>
      <RedirectPage rota={'/register'} id={"no-account-btn"} conteudo={'Ainda não tenho conta'} />
      
    </div>
  );
};

export default Login;
