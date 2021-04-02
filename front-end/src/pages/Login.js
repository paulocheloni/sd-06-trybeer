import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import TrybeerContext from '../context/TrybeerContext';
import { login } from '../api/axiosApi';

export default function Login() {
  const history = useHistory();
  const { loginUser, setLoginUser } = useContext(TrybeerContext);
  const [loginUserLocal, setLoginUserLocal] = useState({ email: '', password: '' });

  const handleLogin = async (dataUser) => {
    const user = await login(dataUser);
    localStorage.setItem('user', JSON.stringify(user));
    setLoginUser({ ...loginUser, user });

    if (user.role === 'client') {
      history.push({ pathname: '/products' });
    } else if (user.role === 'administrator') {
      history.push({ pathname: '/admin/orders' });
    } else {
      history.push({ pathname: '/register' });
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginUserLocal({ ...loginUserLocal, [name]: value });
  };

  const { email, password } = loginUserLocal;
  const inputEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const PASSWORD_MIN_SIZE = 6;
  const activeButton = inputEmail.test(email) && password.length >= PASSWORD_MIN_SIZE;

  return (
    <section>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="signin-btn"
          disabled={ !activeButton }
          onClick={ () => handleLogin(loginUserLocal) }
        >
          Entrar
        </button>
        <button
          type="button"
          data-testid="no-account-btn"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
    </section>
  );
}
