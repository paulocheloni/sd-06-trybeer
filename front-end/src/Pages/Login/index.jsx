import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import AppContext from '../../context/AppContext';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const fetchApi = async () => {
    // const data = { "email": "tryber@trybe.com.br", "password": "123456" }
    await axios.post('http://localhost:3001/login', { email, password }) //headers apos ,
  }
  const { email, setEmail, validForm, password, setPassword } = useContext(AppContext);
  return (
    <div>
      <h1>Login</h1>
      <Input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        data-testid="email-input"
      />
      <Input
        value={password}
        type="password"
        onChange={({ target }) => setPassword(target.value)}
        name="Senha"
        data-testid="password-input"
      />
      <Button
        disabled={!validForm}
        data-testid="signin-btn"
        onClick={() => fetchApi()}
      />
      <Button
        data-testid="no-account-btn"
        onClick={() => history.push('/register')}
      >
        Ainda não tenho conta
      </Button>
    </div>
  );
};

export default Login;
