import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/app.context';
import { Topbar, TextInput, CheckBox, SubmitButton } from '../components';
import { yupSchemas, handleSubmit } from '../utils';

import '../styles/Forms.css';

export default function Register() {
  const { setToken } = useContext(AppContext);
  const [login, setLogin] = useState({ name: '', email: '', password: '' });
  const [disableBtn, setDisableBtn] = useState(true);

  const history = useHistory();

  const updateLogin = (target) => {
    if (target.type === 'checkbox') {
      setLogin({ ...login, isVendor: target.checked });
    } else {
      setLogin({ ...login, [target.name]: target.value });
    }
  };

  useEffect(() => {
    const validateForm = async () => yupSchemas.register.validate(login)
      .then((valid) => (valid.email) && setDisableBtn(false))
      .catch((error) => {
        if (disableBtn === false) setDisableBtn(true);
        return error;
      });

    validateForm();
  }, [login, disableBtn]);

  return (
    <div>
      <Topbar />
      <form onSubmit={ (e) => handleSubmit(e, login, history, setToken) }>
        <fieldset>
          <legend>Registro</legend>
          <TextInput
            name="name"
            testId="signup"
            value={ login.name }
            callback={ updateLogin }
          />
          <TextInput
            name="email"
            testId="signup"
            value={ login.email }
            callback={ updateLogin }
          />
          <TextInput
            name="password"
            testId="signup"
            value={ login.password }
            callback={ updateLogin }
          />
          <CheckBox callback={ updateLogin } />
          <SubmitButton type="signup" disabled={ disableBtn } />
        </fieldset>
      </form>
    </div>
  );
}
