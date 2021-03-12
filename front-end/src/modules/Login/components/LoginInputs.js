import React, { useContext } from 'react';
import LabeledInput from '../../../design-components/LabeledInput';
import ContextBeer from '../../../context/ContextBeer';

function LoginInputs() {
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
  } = useContext(ContextBeer);

  console.log(loginEmail);

  return (
    <div className="rounded-md shadow-sm space-y-4">
      <LabeledInput
        value={ loginEmail }
        testId="email-input"
        label="password address"
        id="email-address"
        name="email"
        type="email"
        onChange={ setLoginEmail }
        autoComplete="email"
        placeholder="E-mail"
      />
      <LabeledInput
        value={ loginPassword }
        testId="password-input"
        label="Password"
        id="password"
        name="password"
        type="password"
        onChange={ setLoginPassword }
        autoComplete="password"
        placeholder="Password"
      />
    </div>
  );
}

export default LoginInputs;
