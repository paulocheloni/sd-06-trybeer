import React, { useState } from 'react';
import login from '../methods/login';
import Button from '../components/Button';
import Input from '../components/Input';
import loginSchema from '../validationsSchemas/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = async (em, pass) => {
    try {
      const data = await loginSchema.validate({ email: em, password: pass });
      login(data);
    } catch (err) {
      alert(err.message);
    }
  };
  console.log('oi dentro de login');
  return (
    <main>
      <form>
        <Input type="email" setValue={ setEmail } value={ email } />
        <Input type="password" setValue={ setPassword } value={ password } />
        <Button
          className="loginButton"
          onClick={ () => handleClick(email, password) }
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
