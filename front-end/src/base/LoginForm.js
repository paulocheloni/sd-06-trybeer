import React from 'react';
import PropTypes from 'prop-types';

function LoginForm({ handleChanges, handleCheck }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name-input">
          Nome:
          <input
            id="name-input"
            data-testid="signup-name"
            type="text"
            name="name"
            placeholder="Nome"
            onChange={ (e) => handleChanges(e) }
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email-input">
          Email:
          <input
            id="email-input"
            data-testid="signup-email"
            type="email"
            name="email"
            placeholder="Nome"
            onChange={ (e) => handleChanges(e) }
          />
        </label>
      </div>
        <label htmlFor="password-input">
          Senha:
          <input
            id="password-input"
            data-testid="signup-password"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={ (e) => handleChanges(e) }
            />
        </label>
        <label htmlFor="check-input">
          <input
          id="check-input"
            data-testid="signup-seller"
            type="checkbox"
            name="seller"
            onChange={ (e) => handleCheck(e) }
          />
          Quero vender
        </label>
    </form>
  );
}

LoginForm.propTypes = {
  handleChanges: PropTypes.func.isRequired,
};

export default LoginForm;
