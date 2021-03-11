import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useInput from '../hooks/useInput';

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const isEmailValid = /[A-Za-z0-9]+@[A-Za-z]+[A-z]*(\.\w{2,3})+/.test(email);
  const isPasswordValid = password && password.length > 5;

  return (
    <div>
      <h1>Página Login</h1>
      <form>
        <fieldset>
          <label>Email
            <input value={email} onChange={setEmail} data-testid='email-input' type='text' />
          </label>
        </fieldset>
        <fieldset>
          <label>Senha
            <input value={password} onChange={setPassword} data-testid='password-input' type='password' />
          </label>
        </fieldset>
        <button
          onClick={() => history.push('/products')}
          disabled={!(isEmailValid && isPasswordValid)} data-testid='signin-btn'
        >ENTRAR
        </button>
        <Link to='/register' data-testid="no-account-btn">Ainda não tenho conta</Link>
      </form>
    </div>
  )
}