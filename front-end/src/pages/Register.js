import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserByEmail, registerUser } from '../services/api';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [emailExist, setEmailExist] = useState(false);
  const [check, setCheck] = useState(false);

  const history = useHistory();

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
      return setEmailExist(true);
    }
    const roleStatus = check ? 'admin' : 'user';
    const user = { name: nome, email, password, role: roleStatus };
    registerUser(user);
    if (roleStatus === 'user') return history.push('/products');
    history.push('/admin/orders');
  };

  const handleChange = async (e) => {
    e.preventDefault();
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    } else if (e.target.type === 'checkbox') {
      setCheck(true);
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
            id="checkbox"
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
