import React from 'react';
import api from '../api/index';
import history from '../utilities/History';

export default function Register() {
  const inputCheckbox = () => (document.getElementById('sell-checkbox').checked);
  const signUp = () => {
    const typeRole = inputCheckbox() ? 'administrator' : 'client';
    const checkRole = api.post('/register', {
      name: '',
      email: '',
      password: '',
      role: typeRole }).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      if (res.data.role === 'administrator') history.push('/admin/orders');
      if (res.data.role === 'client') history.push('/products');
    })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });
    return checkRole;
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <span>Nome</span>
        <input
          name="name"
          className="input"
          data-testid="signup-name"
          // onChange={ this.handleChange }
        />
        <div className="email-div">
          <span>Email</span>
          <input
            name="email"
            className="input"
            data-testid="signup-email"
            // onChange={ this.handleChange }
          />
          <span className="hidden-span" />
        </div>
        <span>Senha</span>
        <input
          name="password"
          type="password"
          className="input"
          data-testid="signup-password"
          // onChange={ this.handleChange }
        />
        <label htmlFor="sell-checkbox">
          <input type="checkbox" id="sell-checkbox" data-testid="signup-seller" />
          <span>Quero vender</span>
        </label>
      </div>
      <button
        type="button"
        data-testid="signup-btn"
        onClick={ () => signUp() }
        // disabled={ !validRegName || !validRegEmail || !validRegPass }
      >
        Cadastrar
      </button>
    </div>
  );
}
