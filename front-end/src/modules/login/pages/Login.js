import React from 'react';
import Form from '../components/FormLogin';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Login = () => (
  <div className="max-w-sm">
    <PaperContainer>
      <p className="text-2xl">Login</p>
      <Form />
    </PaperContainer>
  </div>
);

export default Login;
