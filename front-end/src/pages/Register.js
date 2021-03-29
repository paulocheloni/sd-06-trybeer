import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { signUp } from '../api/axiosApi';
import TrybeerContext from '../context/TrybeerContext';
import { validateEmail, validatePassword, validateName } from '../utilities/validations';

export default function Register() {
  const { loginUser, setLoginUser } = useContext(TrybeerContext);
  const [badReq, setBadReq] = useState(false);
  const history = useHistory();

  const handleRegisterUser = async (dataUser) => {
    const { name, email, password, wantToSell } = dataUser;
    const role = wantToSell ? 'administrator' : 'client';
    const statusConflict = 409;
    setBadReq(false);
    const user = await signUp(name, email, password, role);
    localStorage.setItem('user', JSON.stringify(user));
    if (user.status === statusConflict) {
      setBadReq(true);
    } else if (user.data.role === 'client') {
      history.push('/products');
    } else if (user.data.role === 'administrator') {
      history.push('/admin/orders');
    }
  };

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setLoginUser({ ...loginUser, [name]: value });
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <span>Nome</span>
        <input
          name="name"
          className="input"
          data-testid="signup-name"
          onChange={ handleChange }
        />
        <div className="email-div">
          <span>Email</span>
          <input
            name="email"
            className="input"
            data-testid="signup-email"
            onChange={ handleChange }
          />
          <span className="hidden-span" />
        </div>
        <span>Senha</span>
        <input
          name="password"
          type="password"
          className="input"
          data-testid="signup-password"
          onChange={ handleChange }
        />
        <label htmlFor="wantToSell">
          Quero vender
          <input
            type="checkbox"
            name="wantToSell"
            data-testid="signup-seller"
            onChange={ handleChange }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="signup-btn"
        disabled={
          !validateName(loginUser.name)
          || !validateEmail(loginUser.email)
          || !validatePassword(loginUser.password)
        }
        onClick={ () => handleRegisterUser(loginUser) }
      >
        Cadastrar
      </button>
      { badReq && <span> E-mail already in database. </span> }
    </div>
  );
}
