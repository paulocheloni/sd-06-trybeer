import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../components/FormLogin';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Login = () => {
  const roleA = 'client'; // From localStorage
  const storage = JSON.parse(localStorage.getItem('user'));
  const existToken = storage ? storage.token : false;
  console.log(existToken);

  return (
    <div className="max-w-sm">
      { (existToken && roleA === 'client') && <Redirect to="/products" /> }
      { (existToken && roleA === 'administrator') && <Redirect to="/profile" /> }
      <PaperContainer>
        <p className="text-2xl">Login</p>
        <Form />
      </PaperContainer>
    </div>
  );
};

export default Login;
