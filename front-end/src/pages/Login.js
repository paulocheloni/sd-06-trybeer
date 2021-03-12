import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TrybeerContext from '../context/TrybeerContext';

const {
  userValidation, redirectPath, handleUserNotRegistered,
} = require('../services/loginService');

function Login() {
  const { user, setUser } = useContext(TrybeerContext);
  const [enableButton, setEnableButton] = useState(true);
  const history = useHistory();

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
          onClick={ () => redirectPath(history, user) }
        >
          ENTRAR
        </button>
        <button
          type="button"
          data-testid="no-account-btn"
          onClick={ () => handleUserNotRegistered(history) }
        >
          Ainda não tenho conta
        </button>
      </div>
    </form>
  );
}

export default Login;
