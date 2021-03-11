import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUserByEmail } from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);

  const history = useHistory();

  const validateLogin = (userEmail, userPassword) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const minPassword = 5;

    if (userPassword.length >= minPassword && regex.test(userEmail)) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
    validateLogin(email, password);
  };

  const handleClick = async () => {
    const userFound = await getUserByEmail(email);

    if (userFound.role === 'client') {
      history.push('/products');
    } else {
      history.push('/admin/orders');
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            data-testid="email-input"
            name="email-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password-input">
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
            disabled={ btnDisable }
            onClick={ handleClick }
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
