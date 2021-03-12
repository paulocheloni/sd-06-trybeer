import React from 'react';
import PropTypes from 'prop-types';

function LoginForm(props) {
  const { setEmail, setPassword } = props;

  return (
    <div>
      <form>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            data-testid="email-input"
            name="email-input"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password-input"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default LoginForm;
