import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '../../design-components/Button';
import RegisterInputs from './components/RegisterInputs';
import ContextBeer from '../../context/ContextBeer';
import registerValidation from '../../utils/registerValidation';

const STATUS_CONFLICT = 409;

function Register() {
  const history = useHistory();
  const [duplicated, setDuplicated] = useState('');
  const [whatSTheRole, setWhatSTheRole] = useState('client');
  const [isChecked, setIsChecked] = useState(false);
  const {
    registerName,
    registerEmail,
    registerPassword,
    registerIsDisabled,
    setregisterIsDisabled,
  } = useContext(ContextBeer);

  useEffect(() => {
    registerValidation(
      registerName, registerEmail, registerPassword, setregisterIsDisabled,
    );
  }, [registerName, registerEmail, registerPassword, setregisterIsDisabled]);

  // const isChecked = () => {
  //   if (document.getElementById('wannasell').checked) return true;
  // };

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const signUpOnClick = () => {
    if (isChecked) {
      setWhatSTheRole('administrator');
    }
    axios
      .post(`${baseUrl}/register`, {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        role: whatSTheRole,
      })
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
            isDisabled={ registerIsDisabled }
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
              checked={ isChecked }
              onChange={ () => setIsChecked(!isChecked) }
            />
            Quero vender
          </label>
        </form>
      </div>
    </div>
  );
}

export default Register;
