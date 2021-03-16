import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TrybeerContext from '../context/TrybeerContext';
import { validateNewUser } from '../services/UserRegisterService';
import { registerNewUSer } from '../services/UserRegisterService';


function UserRegister() {
  const { newUser, setNewUser } = useContext(TrybeerContext);
  const [enableButton, setEnableButton] = useState(true);
  // const [userAlreadyRegistered, setUserAlreadyRegistered] = useState(false);
  const history = useHistory();

  // async function checkExistingUser(user) {
  //   const userExists = await checkUser(newUser);
  //   console.log('Usuário existe:', userExists);
  //   if (userExists) {
  //     setUserAlreadyRegistered(true);
  //     return null;
  //   }
  // }
  // async function handleButtonClick(event) {
  //   event.preventDefault();
  //   console.log('Clicou no botão');
  //   console.log('Novo usuário', newUser);
  //   if (checkExistingUser(newUser)) return true;
  //   console.log('Não deve aparecer se usario existe');
  //   // setup de salvar usuário (rota, controller, etc)
  // }
  return (
    <div>
      <form>
        <label htmlFor="signup-name">
          Nome
          <input
            id="signup-name"
            type="text"
            name="name"
            data-testid="signup-name"
            onChange={ () => validateNewUser(newUser, setNewUser, setEnableButton) }
          />
        </label>
        <label htmlFor="signup-email">
          Email
          <input
            id="signup-email"
            type="email"
            name="email"
            data-testid="signup-email"
            onChange={ () => validateNewUser(newUser, setNewUser, setEnableButton) }
          />
        </label>
        <label htmlFor="signup-password">
          Senha
          <input
            id="signup-password"
            type="password"
            name="password"
            data-testid="signup-password"
            onChange={ () => validateNewUser(newUser, setNewUser, setEnableButton) }
          />
        </label>
        <label htmlFor="signup-seller">
          <input
            type="checkbox"
            id="signup-seller"
            name="signup-seller"
            onChange={ () => validateNewUser(newUser, setNewUser, setEnableButton) }
            data-testid="signup-seller"
          />
              Quero vender
        </label>
        <button
          disabled={enableButton}
          type="button"
          data-testid="signup-btn"
          onClick={ () => registerNewUSer(history, newUser) }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default UserRegister;
