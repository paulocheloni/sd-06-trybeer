import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import * as api from '../api/api';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);
  const [user, setUser] = useState({});
  const history = useHistory();

  const verifyEmailAndPassword = () => {
    const isEmailValid = email.match(/\S+@\S+\.\S+/);
    const isPasswordValid = password.match(/^[0-9a-zA-Z]{6,50}$/);

    if (isEmailValid && isPasswordValid) {
      setActiveBtn(true);
      setUser({ email, password })
    } else setActiveBtn(false);
  }

  const handleSubmit = () => {
    api.login(user)
      .then((response) => {
        const isAdmin = response.data.role === 'administrator';
        localStorage.setItem('token', response.data.token);

        if (isAdmin) {
          history.push('admin/orders')
        } else {
          history.push('products')
        }
      });
  }

  useEffect(() => {
    verifyEmailAndPassword();
    setUser({ email, password })
  }, [email, password]);

  return (
    <div>
      <span>Email</span>
      <input type="email" data-testid="email-input" onChange={(event) => setEmail(event.target.value)}></input>
      <span>Senha</span>
      <input type="text" data-testid="password-input" onChange={(event) => setPassword(event.target.value)}></input>
      <button type='submit' disabled={!activeBtn} onClick={() => handleSubmit()} data-testid="signin-btn">ENTRAR</button>
      <Link to={'/register'}>
        <button type='button' data-testid="no-account-btn">
          Ainda não tenho conta
      </button>
      </Link>
    </div>
  );
}

export default Login;


