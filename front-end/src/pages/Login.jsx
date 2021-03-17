import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { verifyEmailAndPassword, handleSubmit } from '../services';
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
    <div>
      <ControllerHeader />
      <span>Email</span>
      <input
        type="email"
        data-testid="email-input"
        onChange={ (event) => setEmail(event.target.value) }
      />
      <span>Senha</span>
      <input
        type="text"
        data-testid="password-input"
        onChange={ (event) => setPassword(event.target.value) }
      />
      <button
        type="submit"
        disabled={ !activeBtn }
        onClick={ () => handleSubmit(history, user) }
        data-testid="signin-btn"
      >
        Entrar
      </button>
      <Link to="/register">
        <button type="button" data-testid="no-account-btn">
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
}

export default Login;
