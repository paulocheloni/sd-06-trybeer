import React, { useState, useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';
import { userValidation, axios } from '../services/loginService';

function Login() {
  const { user, setUser } = useContext(TrybeerContext);
  const [enableButton, setEnableButton] = useState(true);

  return (
    <form>
      <div>
        <input
          id="email-input"
          placeholder="email"
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ () => userValidation(user, setUser, setEnableButton) }
        />
      </div>
      <div>
        <input
          id="password-input"
          placeholder="password"
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ () => userValidation(user, setUser, setEnableButton) }
        />
      </div>
      <div>
        <button
          disabled={ enableButton }
          type="button"
          data-testid="signin-btn"
        onClick={ () => axios(user) }
        >
          ENTRAR
        </button>
        <button
          type="button"
          data-testid="no-account-btn"
        // onClick={handleClick}
        >
          Ainda não tenho conta
        </button>
      </div>
    </form>
  );
}

export default Login;
