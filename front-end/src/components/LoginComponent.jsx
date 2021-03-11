import React from 'react';

function Login() {
  return(
    <>
      <forms >
        <label htmlFor="email">
          Email
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="pass">
          Senha
          <input type="password" id="pass" name="pass" />
        </label>
        <button id="enter" type="button">ENTRAR</button>
        <button id="sign-up" type="button">Ainda não tenho conta</button>
      </forms>
    </>
  )
};

export default Login;
