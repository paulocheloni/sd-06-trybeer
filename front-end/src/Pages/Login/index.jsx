import React, { useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import AppContext from '../../context/AppContext';

const Login = () => {
  const { email, setEmail, validForm, password, setPassword } = useContext(AppContext);
  const history = useHistory();
  const fetchApi = async () => {
    const body = { email, password };
    const response = await axios.post('http://localhost:3001/login', body); // headers apos ,
    const data = await response.data;
    localStorage.setItem('token', JSON.stringify(data.userLogin.token));
    if (data.userLogin.role === 'client') {
      return history.push('/products');
    } 
    history.push('/admin/orders');
    
  };
  return (
    <div>
      <h1>Login</h1>
      <Input
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        dataTestId="email-input"
      />
      <Input
        value={ password }
        type="password"
        onChange={ ({ target }) => setPassword(target.value) }
        name="Senha"
        dataTestId="password-input"
      />
      <Button
        disabled={ !validForm }
        dataTestId="signin-btn"
        onClick={ () => fetchApi() }
      >
        ENTRAR
      </Button>
      <Button
        dataTestId="no-account-btn"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </Button>
    </div>
  );
};

export default Login;
