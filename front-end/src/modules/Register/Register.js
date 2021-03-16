import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Button from '../../design-components/Button';
import RegisterInputs from './components/RegisterInputs';
import ContextBeer from '../../context/ContextBeer';
import registerValidation from '../../utils/registerValidation';

function Register() {
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

  function isChecked() {
    if (document.getElementById('wannasell').checked) {
      console.log('será admin');
    }
  }

  const signUpOnClick = () => {
    isChecked();
    console.log('cadastro com sucesso!');
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
            data-testid="signup-btn"
          >
            Cadastrar
          </Button>
          <label htmlFor="wannasell">
            <input
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
