import React, { useState } from 'react';
import login from '../methods/login';
import Button from '../components/Button';
import Input from '../components/Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('oi dentro de login');
  return (
    <main>
      <form>
        <Input type="email" setValue={ setEmail } value={ email } />
        <Input type="password" setValue={ setPassword } value={ password } />
        <Button
          className="loginButton"
          onClick={ () => login(email, password) }
        >
          Entrar
        </Button>
        <Button
          className="semConta"
          onClick={ () => console.log('faz alguma coisa com isso') }
        >
          Ainda não tenho conta
        </Button>
      </form>
    </main>
  );
}

export default Login;
