import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { verifyEmailAndPassword, handleSubmit } from '../services';
import logo from '../img/trybe.png';
import '../css/Login.css';
import ControllerHeader from '../components/ControllerHeader';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    verifyEmailAndPassword(email, password, setActiveBtn, setUser);
    setUser({ email, password });
  }, [email, password]);
  return (
    <div className="login-page">
      <ControllerHeader />
      <div className="login-container">
        <img src={ logo } alt="logo" className="logo" />
        <div className="form-container">
          <h3 className="login-title">PROJECT - TRYBEER</h3>
          <span>Email</span>
          <input
            type="email"
            className="input-form-login"
            data-testid="email-input"
            placeholder="Informe o e-mail"
            onChange={ (event) => setEmail(event.target.value) }
          />
          <span>Senha</span>
          <input
            type="text"
            className="input-form-login"
            data-testid="password-input"
            placeholder="Informe a senha"
            onChange={ (event) => setPassword(event.target.value) }
          />
          <button
            className="button-form-login"
            type="submit"
            disabled={ !activeBtn }
            onClick={ () => handleSubmit(history, user) }
            data-testid="signin-btn"
          >
            Entrar
          </button>
          <Link to="/register">
            <button type="button" data-testid="no-account-btn" className="link-button">
              Ainda não tenho conta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
