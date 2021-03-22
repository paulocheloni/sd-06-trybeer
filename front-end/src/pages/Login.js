import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link, useHistory } from 'react-router-dom';
import history from '../utils/history';

import AppContext from '../context/app.context';
import { Topbar, TextInput, SubmitButton } from '../components';
import { yupSchemas, handleUser } from '../utils';
import userApi from '../services/api.user';

import '../styles/Forms.css';

export default function Login() {
  const { setToken } = useContext(AppContext);
  const [disableBtn, setDisableBtn] = useState(true);
  const [login, setLogin] = useState({ email: '', password: '' });

  // const history = useHistory();

  useEffect(() => {
    const validateForm = async () => yupSchemas.login.validate(login)
      .then((valid) => (valid.email) && setDisableBtn(false))
      .catch((error) => {
        if (disableBtn === false) setDisableBtn(true);
        return error;
      });

    validateForm();
  }, [login, disableBtn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valid = await yupSchemas.login.isValid(login);
    if (valid) {
      const newUser = await userApi(login);
      handleUser(newUser, history, setToken);
    }
  };

  const updateLogin = (target) => setLogin({ ...login, [target.name]: target.value });

  return (
    <div>
      <Topbar />
      <form onSubmit={ (e) => handleSubmit(e) }>
        <fieldset>
          <legend>Login</legend>
          <TextInput
            name="email"
            testId="signin"
            value={ login.email }
            callback={ updateLogin }
          />
          <TextInput
            name="password"
            testId="signin"
            value={ login.password }
            callback={ updateLogin }
          />
          <SubmitButton type="signin" disabled={ disableBtn } />
          <Link to="/register">
            <button type="button" data-testid="no-account-btn">
              Ainda não tenho conta
            </button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
