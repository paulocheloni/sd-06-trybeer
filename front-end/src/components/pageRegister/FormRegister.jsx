import React, { useContext } from 'react';
import ButtonsForm from './ButtonsForm';
import InputsForm from './InputsForm';
import RegisterContext from '../../context/RegisterContext';

function FormRegister() {
  const {
    change: handleChange,
    click: handleClick,
    user: newUser,
    isValid: valid,
    messageError: errMsg,
    displayError: displayErr,
  } = useContext(RegisterContext);

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
      {InputsForm(newUser, handleChange)}
      {ButtonsForm(valid, handleClick)}
      { displayErr && displayError() }
    </div>
  );
}

export default FormRegister;
