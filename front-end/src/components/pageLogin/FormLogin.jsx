import React, { useContext } from 'react';
import LoginContext from '../../context/LoginContext';
import InputsForm from './InputsForm';
import ButtonsForm from './ButtonsForm';

function FormLogin() {
  const {
    dataUser: user,
    handleIputs: handleChange,
    handleButton: handleClick,
    isDisabled: valid,
    router: history,
    messageError: errMsg,
    displayError: displayErr,
  } = useContext(LoginContext);

  function displayError() {
    const span = document.querySelector('span');
    if (span) span.remove();
    const elementMessage = document.createElement('span');
    elementMessage.innerText = errMsg;
    const bodyForm = document.querySelector('#bodyForm');
    bodyForm.appendChild(elementMessage);
  }
  return (
    <div id="bodyForm">
      { InputsForm(user, handleChange) }
      { ButtonsForm(valid, handleClick, history) }
      { displayErr && displayError() }
    </div>
  );
}

export default FormLogin;
