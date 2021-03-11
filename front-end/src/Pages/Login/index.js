import React, { useContext } from 'react';
import Input from '../../Components/Input';
import AppContext from '../../context/AppContext';

const Login = () => {
  const { email, setEmail, validForm, password, setPassword } = useContext(AppContext); 
  return (
    <div>
      <h1>Login</h1>
      <Input
        value={ email }
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        name="E-mail"
        data-testid="email-input"
      />
      <Input
        value={ password }
        type="password"
        onChange={({ target }) => setPassword(target.value)}
        name="Senha"
        data-testid="password-input"
      />
      <button disabled={!validForm} data-testid="signin-btn">Teste</button>
    </div>
  )

}

export default Login;
