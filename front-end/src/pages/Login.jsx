import React, { useState } from 'react';

function Login() {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let inputEmail,inputPassword;

  const handleChange = () => {
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    inputEmail = document.getElementById('emailInput').value;
    inputPassword = document.getElementById('passwordInput').value.length;
    const six = 6;

    console.log(email);

    setDisabled(regex.test(inputEmail) && inputPassword >= six);
  };

  const handleSubmit = (email, password) => {};

  return (
    <div>
      <label htmlFor="emailInput">
        Email
        <input
          id="emailInput"
          data-testid="email-input"
          onChange={ (e) => {
            handleChange();
            setEmail(e.target.value);
          } }
        />
      </label>
      <label htmlFor="passwordInput">
        Senha
        <input
          id="passwordInput"
          type="password"
          data-testid="password-input"
          onChange={ (e) => {
            handleChange();
            setPassword(e.target.value);
          } }
        />
      </label>
      <button disabled={ !disabled } id="signinBtn" data-testid="signin-btn">
        ENTRAR
      </button>
      <button data-testid="no-account-btn">Ainda nao tenho conta</button>
    </div>
  );
}

export default Login;
