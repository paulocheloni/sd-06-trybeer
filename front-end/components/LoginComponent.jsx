import React from 'react';

function Login() {
  return (
    <div className="login-register">
      <forms>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            data-testid="email-input"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="pass">
          Senha
          <input
            type="password"
            id="pass"
            name="pass"
            data-testid="password-input"
            placeholder="Digite sua senha"
          />
        </label>
        <button 
          id="enter"
          type="button"
          data-testid="signin-btn"
          className="btt-login"
        >
          ENTRAR
        </button>
        <button 
          id="sign-up"
          type="button"
          data-testid="no-account-btn"
          className="btt-register"
        >
          Ainda não tenho conta
        </button>
      </forms>
    </div>
  )
};

export default Login;
