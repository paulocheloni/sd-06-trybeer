import React, { useState, useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';

function Login() {
  const {
    email,
    setEmail,
    setPasword,
  } = useContext(TrybeerContext);
  const [enableButton, setEnableButton] = useState(true);

  function handleChange() {
    let passwordValid;
    let emailValid;
    passwordValid = document.getElementById('password-input').value;
    emailValid = document.getElementById('email-input').value;
    const regexValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const minChars = 6;
    console.log(typeof passwordValid);
    console.log('Email', regexValidation.test(emailValid));
    console.log('Senha', passwordValid.length > minChars);
    if (regexValidation.test(emailValid) && passwordValid.length > minChars) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }
  return (
    <div>
      <form>
        <div>
          Login
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
            Entrar
            </button>
          <button
            type="button"
            data-testid="no-account-btn"
          //onClick={handleClick}
          >
            Ainda não tem conta
            </button>
        </div>
      </form>

    </div>
  );
}

export default Login;
