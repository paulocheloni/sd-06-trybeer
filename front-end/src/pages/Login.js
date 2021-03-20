import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from '../context/app.context';

import { Topbar, TextInput, SubmitButton } from '../components';
import yup from '../utils/yupSchemas';
import loginUser from '../services/api.user';

export default function Login() {
  const { setToken } = useContext(AppContext);
  const [disableBtn, setDisableBtn] = useState(true);
  const [login, setLogin] = useState({ email: '', password: '' });

  const history = useHistory();

  useEffect(() => {
    const validateForm = async () => yup.loginSchema.isValid(login)
      .then((valid) => {
        if (disableBtn === valid) {
          setDisableBtn(!valid);
        }
      });

    validateForm();
  }, [login, disableBtn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = await yup.loginSchema.isValid(login);

    if (valid) {
      const user = await loginUser(login);
      if (user.role) {
        setToken(user);
        if (user.role === 'administrator') history.push('/admin/orders');
        if (user.role === 'client') history.push('/products');
      }

      if (user.code) {
        history.push({
          pathname: '/error',
          state: { ...user } });
      }
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
