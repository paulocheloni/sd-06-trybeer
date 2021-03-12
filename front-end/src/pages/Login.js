import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import verifyEmailAndPassword from '../utils/verifyEmailAndPassword';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!verifyEmailAndPassword(email, password));
  }, [email, password]);

  const handleSignUp = (event) => {
    event.preventDefault();
    if (email.includes('@trybe.com.br')) {
      history.push('/admin/orders');
    } else {
      history.push('/products');
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    history.push('/register');
  };

  return (
    <div>
      <form onSubmit={ handleSignUp }>
        <p>Email</p>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={ email }
          data-testid="email-input"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <p>Senha</p>
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={ password }
          data-testid="password-input"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          data-testid="signin-btn"
          type="submit"
          disabled={ isDisabled }
        >
          ENTRAR
        </button>
      </form>
      <button
        data-testid="no-account-btn"
        type="button"
        onClick={ handleRegister }
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}

export default Login;
