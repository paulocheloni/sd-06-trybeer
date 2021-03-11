import React from 'react';

function Signup() {
  return(
    <div className="login-register">
      <forms>
        <label htmlFor="s-name">
          Nome
          <input
            type="text"
            id="s-name"
            name="name"
            data-testid="signup-name"
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="s-email">
          Email
          <input 
            type="email"
            id="s-email"
            name="email"
            data-testid="signup-email"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="s-pass" className="txt-label">
          Senha
          <input
            type="password"
            id="s-pass"
            name="pass"
            data-testid="signup-password"
          />
        </label>
        <input type="checkbox" data-testid="signup-seller">Quero vender</input>
        <button id="sign-up" type="button" data-testid="signup-btn" className="btt-login">CADASTRAR</button>
      </forms>
    </div>
  )
};

export default Signup;
