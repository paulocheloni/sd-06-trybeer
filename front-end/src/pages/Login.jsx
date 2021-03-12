import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../methods/login';
import Button from '../components/Button';
import Input from '../components/Input';
import loginSchema from '../validationsSchemas/login';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(true);
  const handleChanges = async () => {
    try {
      await loginSchema.validate({ email, password });
      setButton(false);
    } catch (err) {
      setButton(true);
    }
  };
  handleChanges();
  return (
    <main>
      <form>
        <Input type="email" setValue={ setEmail } value={ email } />
        <Input type="password" setValue={ setPassword } value={ password } />
        <Button
          className="signin-btn"
          onClick={ () => login({ email, password }) }
          disabled={ button }
        >
          Entrar
        </Button>
        <Link
          to="/register"
          className="no-account-btn"
          disabled={ false }
        >
          Ainda não tenho conta
        </Link>
      </form>
    </main>
  );
}

export default Login;
