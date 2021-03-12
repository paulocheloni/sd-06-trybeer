import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import * as api from '../api/api';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);
  const [user, setUser] = useState({});

  const verifyEmailAndPassword = () => {
    const isValid = email.match(/\S+@\S+\.\S+/);
    const isNumber = password.match(/^[0-9]{6,50}$/);

    if (isValid && isNumber) {
      setActiveBtn(true);
    } else setActiveBtn(false);
  }

  function handleSubmit() {
    console.log("event")
    // api.login(user)
  }


  useEffect(() => {
    verifyEmailAndPassword();
    setUser({ email, password })
    handleSubmit()
  }, [email, password]);

  return (
    <div>
      <span>Email</span>
      <input type="email" data-testid="email-input" onChange={(event) => setEmail(event.target.value)}></input>
      <span>Senha</span>
      <input type="text" data-testid="password-input" onChange={(event) => setPassword(event.target.value)}></input>
      <button type='submit' onClick={handleSubmit} data-testid="signin-btn">ENTRAR</button>
      <button type='button' data-testid="no-account-btn">
        Ainda não tenho conta
      </button>
    </div>
  );
}

export default Login;


