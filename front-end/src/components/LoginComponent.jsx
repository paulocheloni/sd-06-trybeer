import React, { useContext, useEffect } from 'react';
import BeersAppContext from '../context/BeersAppContext';
// import history from '../service/history';
import { saveState } from '../service/localStorage'

function Login({ history }) {
  const {
    user,
    setUser,
    valid,
    setValid,
  } = useContext(BeersAppContext);

  useEffect(()=> {
    const isValid = async () => {
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      const email = emailRegex.test(user.email);
      const password = user.password;
      const minLength = 6;
      if(password.length >= minLength && email) {
        setValid(false)
      } else {
        setValid(true)
      }
    };
    isValid();
  }, [user.password, user.email]);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value});
  };

  const handleClick = (e) => {
    e.preventDefault();
    if(user.email === 'tryber@trybe.com.br') {
      history.push('admin/orders');
    } else {
      history.push('/products');
    }
    saveState('user', user.email);
  };

  return(
    <div>
      <forms >
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="email"
            id="email"
            name="email"
            value={ user.email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="pass">
          Senha
          <input
            type="password"
            id="pass"
            name="password"
            value={ user.password }
            onChange={ handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          data-testid="signin-btn"
          id="enter"
          type="button"
          disabled = { valid }
          onClick={ handleClick }
        >
          ENTRAR
        </button>
        <button
          data-testid="no-account-btn"
          id="sign-up"
          type="button"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </forms>
    </div>
  )
};

export default Login;
