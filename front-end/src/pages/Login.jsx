import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({ email: '', password: ''});
  const [valid, setValid] = useState(true);

  const handleChange = ({ target }) => {
    setUser({...user, [target.name]: target.value});
    console.log(user.password);   
  };

  useEffect(() => {
 console.log('nada');
     if (user.password) {
      console.log('ola');
      isValid();
    }
  }, []);


  const isValid = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const email = emailRegex.test(user.email);
    const senha = user.password;
    const six = 6
    if(email && senha.length > 5) {
      setValid(false);
      console.log('oi')
    } else {
      setValid(true);
    }
  }

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify(user.email));
  };

  return (
    <div>
      <label>Email:
        <input
          type="email"
          name="email"
          value={user.email}
          data-testid="email-input"
          onChange={handleChange}
        />
      </label>
      <label>Senha:
        <input
          type="password"
          name="password"
          value={user.password}
          data-testid="password-input"
          onChange={handleChange}
          />
      </label>
      <button
        type="submit"
        data-testid="signin-btn"
        disabled={valid}
        onClick={handleClick}
      >ENTRAR
      </button>
      <button
        type="button"
        data-testid="no-account-btn"
      >Ainda não tenho conta
      </button>
    </div>
  )
}

export default Login;
