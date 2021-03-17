import React from 'react';
import { Redirect } from 'react-router-dom';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Register = () => {
  const storage = JSON.parse(localStorage.getItem('user'));
  const role = storage ? storage.role : '';
  const existToken = storage ? storage.token : false;

  return (
    <div>
      { (existToken && role === 'client') && <Redirect to="/products" /> }
      { (existToken && role === 'administrator') && <Redirect to="/admin/orders" /> }
      <PaperContainer>
        <p>Register</p>
      </PaperContainer>
    </div>
  );
};
export default Register;
