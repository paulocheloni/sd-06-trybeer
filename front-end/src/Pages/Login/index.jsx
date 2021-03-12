import React, { useContext } from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import AppContext from '../../context/AppContext';

const Login = () => {
  const { email, setEmail, validForm, password, setPassword } = useContext(AppContext);
  return (
    <div>
      <h1>Login</h1>
      <Input
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        data-testid="email-input"
      />
      <Input
        value={ password }
        type="password"
        onChange={ ({ target }) => setPassword(target.value) }
        name="Senha"
        data-testid="password-input"
      />
      <Button
        disabled={ !validForm }
        data-testid="signin-btn"
        onClick={ () => console.log('funcionando') }
      />
    </div>
  );
};

export default Login;
