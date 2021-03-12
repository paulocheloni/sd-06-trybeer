import React from 'react';
import PropTypes from 'prop-types';

function RegisterForm(props) {
  const { setName, setEmail, setPassword, setCheck } = props;

  return (
    <div>
      <form>
        <label htmlFor="signup-name">
          Nome
          <input
            type="name"
            data-testid="signup-name"
            name="signup-name"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="signup-email">
          Email
          <input
            type="email"
            data-testid="signup-email"
            name="signup-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="signup-password">
          Senha
          <input
            type="password"
            data-testid="signup-password"
            name="signup-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <label htmlFor="signup-seller">
          Quero Vender
          <input
            type="checkbox"
            data-testid="signup-seller"
            name="signup-seller"
            id="checkbox"
            onChange={ ({ target }) => setCheck(target.value) }
          />
        </label>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
};

export default RegisterForm;
