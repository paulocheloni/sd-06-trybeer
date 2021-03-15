import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="email">
            Email
            <input type="email" name="email" data-testid="email-input" />
          </label>
          <label htmlFor="senha">
            Senha
            <input type="password" name="senha" data-testid="password-input" />
          </label>
          <button type="submit" data-testid="signin-btn">Entrar</button>
          <button type="button" data-testid="signin-btn">
            Ainda não tenho conta
          </button>
        </fieldset>
      </form>
    </div>
  );
}
