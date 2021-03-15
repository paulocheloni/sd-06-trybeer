import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserByEmail } from '../services/api';
import LoginForm from '../components/LoginForm';
import Button from '../components/Button';
import { regex, minPassword } from '../variables';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (password.length >= minPassword && regex.test(email)) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [email, password]);

  const handleLocalStorage = (user) => {
    if (user) {
      const { name, role, token } = user;
      const obj = {
        name,
        email,
        token,
        role,
      };
      const jsonAux = JSON.stringify(obj);
      localStorage.setItem('user', jsonAux);
    }
  };

  const handleClick = async () => {
    const userFound = await getUserByEmail(email);
    handleLocalStorage(userFound);
    if (userFound.role === 'client') {
      history.push('/products');
    } else if (userFound.role === 'administrator') {
      history.push('/admin/orders');
    }
  };

  return (
    <div>
      <LoginForm setEmail={ setEmail } setPassword={ setPassword } />
      <Button
        title="ENTRAR"
        dataTestid="signin-btn"
        handleClick={ handleClick }
        btnDisable={ btnDisable }
      />
      <Button
        title="Ainda não tenho conta"
        dataTestid="no-account-btn"
        handleClick={ () => history.push('/register') }
        btnDisable={ false }
      />
    </div>
  );
}

export default Login;
