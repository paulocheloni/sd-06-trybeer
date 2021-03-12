import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';

function FormLogin() {
  const {
    dataUser: user,
    hadleIputs: handleChange,
    handleButton: handleClick,
    isDisabled: valid,
    router: history,
  } = useContext(LoginContext);
  return (
    <div>
      <label htmlFor="email-user">
        Email:
        <input
          id="email-user"
          type="email"
          name="email"
          value={ user.email }
          data-testid="email-input"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="pass-user">
        Senha:
        <input
          id="pass-user"
          type="password"
          name="password"
          value={ user.password }
          data-testid="password-input"
          onChange={ handleChange }
        />
      </label>
      <button
        type="submit"
        data-testid="signin-btn"
        disabled={ valid }
        onClick={ handleClick }
      >
        ENTRAR
      </button>
      <button
        type="button"
        data-testid="no-account-btn"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}

export default FormLogin;
