import React, { useState } from 'react';
import { getUserByEmail } from '../services/api';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [emailExist, setEmailExist] = useState(false);

  const validateRegister = (userEmail, userPassword, userNome) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const regexUser = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const validEmail = regex.test(userEmail);
    const validUser = regexUser.test(userNome);
    const minUser = 12;
    const minPassword = 5;

    if (userNome.length <= minUser || !validUser) {
      return setBtnDisable(true);
    } if (!validEmail) {
      return setBtnDisable(true);
    } if (userPassword.length < minPassword) {
      return setBtnDisable(true);
    }
    return setBtnDisable(false);
  };

  const handleRedirect = async () => {
    const userFound = await getUserByEmail(email);
    if (!userFound.message) {
      setEmailExist(true);
    }
    console.log(userFound);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    } else {
      setNome(e.target.value);
    }
    await validateRegister(email, password, nome);
  };
  return (
    <div>
      <form>
        <label htmlFor="signup-name">
          Nome
          <input
            type="name"
            data-testid="signup-name"
            name="signup-name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="signup-email">
          Email
          <input
            type="email"
            data-testid="signup-email"
            name="signup-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="signup-password">
          Senha
          <input
            type="password"
            data-testid="signup-password"
            name="signup-password"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="signup-seller">
          Quero vender
          <input
            type="checkbox"
            data-testid="signup-seller"
            name="signup-seller"
            onChange={ handleChange }
          />
        </label>
        <div>
          <button
            type="button"
            data-testid="signup-btn"
            disabled={ btnDisable }
            onClick={ () => handleRedirect() }
          >
            Cadastrar
          </button>
          {emailExist ? <p>E-mail already in database.</p> : null}
        </div>
      </form>
    </div>
  );
}

export default Register;
