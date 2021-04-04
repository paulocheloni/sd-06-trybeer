import React, { useState } from 'react';
import { useHistory } from 'react-router';
// import TrybeerContext from '../context/TrybeerContext';
import { signUp } from '../api/axiosApi';

export default function Register() {
  const history = useHistory();
  // const { loginUser, setLoginUser } = useContext(TrybeerContext);
  const [badReq, setBadReq] = useState(false);
  const [loginUserLocal, setLoginUserLocal] = useState({
    name: '',
    email: '',
    password: '',
    wantToSell: false,
  });

  const numberSetTime = 2300;

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
      setTimeout(() => {
        history.push('/products');
      }, numberSetTime);
    } else if (user.data.role === 'administrator') {
      setTimeout(() => {
        history.push('/admin/orders');
      }, numberSetTime);
    }
  };

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setLoginUserLocal({ ...loginUserLocal, [name]: value });
  };

  const { name, email, password } = loginUserLocal;
  const inputEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const PASSWORD_MIN_SIZE = 6;
  const minLengthName = 11;
  const regexName = /^[a-z ]+$/i;
  const activeButton = inputEmail.test(email)
    && password.length >= PASSWORD_MIN_SIZE
    && regexName.test(name) && name.length > minLengthName;

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
        disabled={ !activeButton }
        onClick={ () => handleRegisterUser(loginUserLocal) }
      >
        Cadastrar
      </button>
      { badReq && <span> E-mail already in database. </span> }
    </div>
  );
}
