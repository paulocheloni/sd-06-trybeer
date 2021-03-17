import React from 'react';
import PropTypes from 'prop-types';
import InputRegister from './InputRegister';

const RegisterForm = ({ state, setState, handleClick }) => {
  const { name,
    email, password, seller, formValidated, messageError, responseError } = state;
  const { setName, setEmail, setPassword, setSeller } = setState;
  return (

    <>
      <h1>Pagina de Registro</h1>
      <InputRegister
        name="name"
        setValue={ setName }
        value={ name }
        label="Nome"
      />
      <InputRegister
        name="email"
        setValue={ setEmail }
        value={ email }
        label="Email"
        type="email"
      />
      <InputRegister
        name="password"
        setValue={ setPassword }
        value={ password }
        label="Senha"
        type="password"
      />
      <InputRegister
        name="seller"
        setValue={ setSeller }
        checked={ seller }
        label="Quero vender"
        type="checkbox"
      />
      <p>
        {messageError
       !== '' || responseError !== '' ? messageError || responseError : null}
      </p>
      <button
        type="button"
        disabled={ !formValidated }
        data-testid="signup-btn"
        onClick={ async () => handleClick() }
      >
        Cadastrar
      </button>
    </>
  );
};
export default RegisterForm;

RegisterForm.propTypes = {
  state: PropTypes.shape(PropTypes.any).isRequired,
  setState: PropTypes.shape(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired,
};
