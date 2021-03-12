import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validateUser } from '../services/users';
import LoginForm from '../components/LoginForm';

function Login() {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleChange = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const six = 6;
    setDisabled(regex.test(email) && password.length >= six);
  };

  const handleSubmit = async (userEmail, userPassword) => {
    const result = await validateUser(userEmail, userPassword);
    if (result.role === 'administrator') return history.push('/admin/orders');
    if (result.role === 'client') return history.push('/products');
  };

  return (
    <LoginForm
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      history={ history }
      disabled={ disabled }
      email={ email }
      setEmail={ setEmail }
      password={ password }
      setPassword={ setPassword }
    />
  );
}

export default Login;
