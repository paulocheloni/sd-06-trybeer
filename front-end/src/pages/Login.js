import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import TrybeerContext from '../context/TrybeerContext';
import { login } from '../api/axiosApi';

// import ErroPage from './ErroPage';

import { validateEmail, validatePassword } from '../utilities/validations';

export default function Login() {
  const history = useHistory();
  const { loginUser, setLoginUser } = useContext(TrybeerContext);

  const handleLogin = async (dataUser) => {
    const user = await login(dataUser);
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user.role);

    if (user.role === 'client') {
      history.push({ pathname: '/products' });
    } else if (user.role === 'administrator') {
      history.push({ pathname: '/admin/orders' });
    } else {
      history.push({ pathname: '/register' });
    }
  };

  // if (loginUser.erro) {
  //   return (
  //     <ErroPage />
  //   );
  // }

  return (
    <section>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ (event) => setLoginUser(
              { ...loginUser, email: event.target.value },
            ) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ (event) => setLoginUser(
              { ...loginUser, password: event.target.value },
            ) }
          />
        </label>
        <button
          type="button"
          data-testid="signin-btn"
          disabled={
            !validateEmail(loginUser.email) || !validatePassword(loginUser.password)
          }
          onClick={ () => handleLogin(loginUser) }
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

// Login.propTypes = {
//   history: PropTypes.shape().isRequired,
// };
