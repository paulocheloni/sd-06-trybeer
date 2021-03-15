import React from 'react';
import Form from '../components/FormRegister';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Register = () => (
  <div className="max-w-sm">
    <PaperContainer>
      <p className="text-2xl">Register</p>
      <Form />
    </PaperContainer>
  </div>
);

export default Register;
