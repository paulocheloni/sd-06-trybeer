import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Register = () => {
  const history = useHistory();

  const storage = JSON.parse(localStorage.getItem('user'));
  const role = storage ? storage.role : '';
  const existToken = storage ? storage.token : false;

  const timeout = 2000;

  setTimeout(() => {
    if (existToken && role === 'client') history.push('/products');
    if (existToken && role === 'administrator') history.push('/admin/orders');
  }, timeout);

  return (
    <div>
      <PaperContainer>
        <p>Register</p>
        <Form />
      </PaperContainer>
    </div>
  );
};
export default Register;
