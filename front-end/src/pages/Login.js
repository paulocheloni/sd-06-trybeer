import React, { useState, useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';

function Login() {
  const { user, setUser } = useContext(TrybeerContext);
  const [enableButton, setEnableButton] = useState(true);

  function handleChange() {
    const regexValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3,6}$/;
    const minimumCharacters = 6;
    const password = document.getElementById('password-input').value;
    const email = document.getElementById('email-input').value;

    if (regexValidation.test(email) && password.length >= minimumCharacters) {
      setUser({ ...user, email, password });

      setEnableButton(false);
    } else {
      setUser({ email: '', password: '' });

      setEnableButton(true);
    }
  }

  return (
    <form>
      <div>
        <input
          id="email-input"
          placeholder="email"
          type="email"
          name="email"
          data-testid="email-input"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          id="password-input"
          placeholder="password"
          name="password"
          type="password"
          data-testid="password-input"
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          disabled={enableButton}
          type="button"
          data-testid="signin-btn"
        //onClick={handleClick}
        >
          ENTRAR
        </button>
        <button
          type="button"
          data-testid="no-account-btn"
        //onClick={handleClick}
        >
          Ainda não tenho conta
        </button>
      </div>
    </form>
  );
}

export default Login;
