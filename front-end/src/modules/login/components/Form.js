import React, { useState } from 'react';
import * as API from '../../../utils'

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [errorMsg, setErrorMsg] = useState('')

  const handleChangeEmail = (emailInput) => {
    setEmail(emailInput)
    const patternEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const validation = patternEmail.test(emailInput)

    setEmailError(!validation);
  }

  const handleChangePassword= (passwordInput) => {
    setPassword(passwordInput)
    const patternPassword = /^[0-9]{6,}$/;
    const validation = patternPassword.test(passwordInput);

    setPasswordError(!validation);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await API.post('/login', { email, password });

    if (response.token) {
      localStorage.setItem('user', JSON.stringify(response));
    } else {
      setErrorMsg(response.message);
    }
  }

  return(
    <div>
      Formulario
      <p>{errorMsg}</p>
      <form onSubmit={handleSubmit}>
        <input
          data-test-id="email-input"
          type="text"
          value={email}
          onChange={ ({ target }) => handleChangeEmail(target.value) }
        />
        <input
          data-test-id="password-input"
          type="text"
          value={password}
          onChange={ ({ target }) => handleChangePassword(target.value) }
        />
        <button
          data-test-id="signin-btn"
          type="submit"
          disabled={ emailError || passwordError  }
        >
          <p>Entrar</p>
          <p>ENTRAR</p>
          <p>Sign In</p>
        </button>
      </form>
    </div>
  );
}

export default Form;
