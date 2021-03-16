import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../components/Form';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Login = () => {
  const storage = JSON.parse(localStorage.getItem('user'));
  const role = storage ? storage.role : '';
  const existToken = storage ? storage.token : false;

  return (
    <div>
      { (existToken && role === 'client') && <Redirect to="/products" /> }
      { (existToken && role === 'administrator') && <Redirect to="/profile" /> }
      <PaperContainer>
        <p>Login</p>
        <Form />
      </PaperContainer>
    </div>
  );
};
export default Login;
