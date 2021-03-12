import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useInput from '../hooks/useInput';
import fetchUser from '../services/getUser';
// import axios from 'axios';
// import LoginForm from '../components/LoginForm';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const FIVE = 5;
  const isEmailValid = /[A-Za-z0-9]+@[A-Za-z]+[A-z]*(\.\w{2,3})+/.test(email);
  const isPasswordValid = password && password.length > FIVE;
  const handleOnClik = async () => {
    fetchUser(email, password)
      .then((response) => {
        localStorage.setItem('token', response.data[1]);
        if (response.data[0].role === 'client') {
          history.push('/products');
        }
        history.push('/admin/orders');
      });
  };
  return (
    <div>
      <h1>Página Login</h1>
      <form>
        <fieldset>
          <label>
            Email
            <input value={ email } onChange={ setEmail } data-testid="email-input" type="text" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Senha
            <input value={ password } onChange={ setPassword } data-testid="password-input" type="password" />
          </label>
        </fieldset>
        <button
          onClick={ (e) => {
            e.preventDefault();
            handleOnClik();
          } }
          disabled={ !(isEmailValid && isPasswordValid) }
          data-testid="signin-btn"
        >
          ENTRAR
        </button>
        <Link to="/register" data-testid="no-account-btn">Ainda não tenho conta</Link>
      </form>
    </div>
  );
}
