import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = (props) => {
  const {
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onCheck,
    disabled,
    history,
    isChecked,
  } = props;

  const onHandleClick = () => {
    console.log('teste')
    history.push(isChecked ? '/admin/orders': '/products')
  };
  return (
    <fieldset>
      <form action="" method="POST">
        <label htmlFor="name">
          Nome:
          <input
            data-testid="signup-name"
            type="text"
            name="name"
            placeholder="Nome"
            id="name"
            onChange={ onChangeName }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            data-testid="signup-email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={ onChangeEmail }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="signup-password"
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            onChange={ onChangePassword }
          />
        </label>
        <label htmlFor="checkbox">
          <input
            data-testid="signup-seller"
            type="checkbox"
            name="role"
            id="checkbox"
            onChange={ onCheck }
          />
            Quero vender
        </label>
        <button data-testid="signup-btn" type="button" disabled={ disabled } onClick={ onHandleClick }>
          Cadastrar
        </button>
      </form>
    </fieldset>
  );
};

RegisterForm.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default RegisterForm;
