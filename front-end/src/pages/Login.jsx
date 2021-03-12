import React, { useState } from 'react';
import login from '../methods/login';
import Button from '../components/Button';
import Input from '../components/Input';
import loginSchema from '../validationsSchemas/login';

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
        <Button
          className="no-account-btn"
          onClick={ () => console.log('faz alguma coisa com isso') }
          disabled={ false }
        >
          Ainda não tenho conta
        </Button>
      </form>
    </main>
  );
}

export default Login;
