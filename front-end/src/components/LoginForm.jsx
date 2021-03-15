import React from 'react';
import PropTypes from 'prop-types';

function LoginForm(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setIsDisabled,
  } = useContext(UseContext);

  const history = useHistory();

  const handleChange = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const six = 6;
    setIsDisabled(regex.test(email) && password.length >= six);
  };

  const handleSubmit = async (userEmail, userPassword) => {
    const result = await validateUser(userEmail, userPassword);
    if (result.role === 'administrator') return history.push('/admin/orders');
    if (result.role === 'client') return history.push('/products');
  };

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
      <button
        type="button"
        disabled={ !disabled }
        id="signinBtn"
        data-testid="signin-btn"
        onClick={ () => handleSubmit(email, password) }
      >
        ENTRAR
      </button>
      <button
        type="button"
        data-testid="no-account-btn"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}

LoginForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  history: PropTypes.func,
  disabled: PropTypes.bool,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
}.isRequired;

export default LoginForm;
