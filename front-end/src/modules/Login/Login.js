import React from 'react';
import Button from '../../design-components/Button';
import LoginInputs from './components/LoginInputs';
import Logo from '../../assets/images/Logo.png';

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4
      sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <img className="mx-auto h-64 w-64 w-auto" src={ Logo } alt="Workflow" />
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <LoginInputs />
          <Button bgColor="indigo-600" testId="signin-btn">Entrar</Button>
          <Button bgColor="indigo-400" testId="no-account-btn">
            Ainda não tenho conta
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
