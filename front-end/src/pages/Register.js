import React from 'react';
import { Topbar } from '../components';

export default function Register() {
  return (
    <div>
      <Topbar />
      <form>
        <fieldset>
          <legend>Registro</legend>
          <label htmlFor="name">
            Nome
            <input type="text" id="nome" data-testid="signup-name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" id="email" data-testid="signup-email" />
          </label>
          <label htmlFor="senha">
            Senha
            <input type="password" id="senha" data-testid="signup-password" />
          </label>
          <label htmlFor="quero-vender">
            <input type="checkbox" data-testid="signup-seller" />
            Quero vender
          </label>
          <button type="submit" data-testid="signup-btn">Cadastrar</button>
        </fieldset>
      </form>
    </div>
  );
}
