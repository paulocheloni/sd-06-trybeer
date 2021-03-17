import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '../../design-components/Button';
import RegisterInputs from './components/RegisterInputs';
import ContextBeer from '../../context/ContextBeer';
import registerValidation from '../../utils/registerValidation';

function Register() {
  const history = useHistory();
  const [duplicated, setDuplicated] = useState('');
  const {
    registerName,
    registerEmail,
    registerPassword,
    isDisabled,
    setIsDisabled,
  } = useContext(ContextBeer);

  useEffect(() => {
    registerValidation(registerName, registerEmail, registerPassword, setIsDisabled);
  }, [registerName, registerEmail, registerPassword, setIsDisabled]);

  const isChecked = () => (document.getElementById('wannasell').checked);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const STATUS_CONFLICT = 409;

  const signUpOnClick = () => {
    const whatSTheRole = isChecked() ? 'administrator' : 'client';
    const token = axios
      .post(`${baseUrl}/register`, {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        role: whatSTheRole })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        if (response.data.role === 'administrator') history.push('/admin/orders');
        if (response.data.role === 'client') history.push('/products');
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === STATUS_CONFLICT) {
          setDuplicated(err.response.data.message);
        }
      });
    return token;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4
      sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <RegisterInputs />
          <Button
            onClick={ () => signUpOnClick() }
            isDisabled={ isDisabled }
            bgColor="green-600"
            testId="signup-btn"
          >
            Cadastrar
          </Button>
          {duplicated && <p className="my-10">{duplicated}</p>}
          <label htmlFor="wannasell">
            <input
              className="mt-5"
              name="email"
              type="checkbox"
              data-testid="signup-seller"
              id="wannasell"
              label="Quero vender"
              value="wannasell"
            />
            Quero vender
          </label>
        </form>
      </div>
    </div>
  );
}

export default Register;
