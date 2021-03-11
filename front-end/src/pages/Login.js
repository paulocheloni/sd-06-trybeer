import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);

  const validateLogin = (email, password) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
    const minPassword = 6;
    
    if (password.length >= minPassword && regex.test(email)) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }

  const handleChange = ({ target }) => {
    if (target.type === 'email') {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
    validateLogin(email, password);
  }

  return (
    <div>
      <form>
        <label>
          Email
          <input
            type="email"
            data-testid="email-input"
            name="email-input"
            onChange={ handleChange }
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password-input"
            onChange={ handleChange }
          />
        </label>
        <div>
          <button
            type="button"
            data-testid="signin-btn"
            disabled = { btnDisable }
          >
            ENTRAR
          </button>
          <Link to="/register">
            <button
              type="button"
              data-testid="no-account-btn"
            >
              Ainda não tenho conta
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
