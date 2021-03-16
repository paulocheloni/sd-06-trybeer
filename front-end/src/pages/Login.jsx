import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useInput from '../hooks/useInput';
import fetches from '../services/fetches';
import { emailValidation, passwordValidation } from '../utils/validations';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const handleOnClik = async () => {
    fetches.fetchUserByEmail(email, password)
      .then((response) => {
        // console.log(response);
        if (!response) {
          return;
        }
        localStorage.setItem('token', response[1]);
        if (response[0].role === 'client') {
          history.push('/products');
        } else history.push('/admin/orders');
      });
  };
  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="email-input">
            Email
            <input
              id="email-input"
              value={ email }
              onChange={ setEmail }
              data-testid="email-input"
              type="text"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="password-input">
            Senha
            <input
              id="password-input"
              value={ password }
              onChange={ setPassword }
              data-testid="password-input"
              type="password"
            />
          </label>
        </fieldset>
        <button
          onClick={ (e) => {
            e.preventDefault();
            handleOnClik();
          } }
          disabled={ !(emailValidation(email) && passwordValidation(password)) }
          data-testid="signin-btn"
          type="button"
        >
          Entrar
        </button>
        <Link to="/register" data-testid="no-account-btn">Ainda não tenho conta</Link>
      </form>
    </div>
  );
}
