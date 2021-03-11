<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 349cc65fe1acc5973de7b947889b75b9907db9c5

function Login({ history }) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [valid, setValid] = useState(true);

  useEffect(() => {
    isValid();
  }, [user.password, user.email]);

  const handleChange = ({ target }) => {
<<<<<<< HEAD
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

=======
    setUser({ ...user, [target.name]: target.value });
  };
>>>>>>> 349cc65fe1acc5973de7b947889b75b9907db9c5

  const isValid = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const email = emailRegex.test(user.email);
    const senha = user.password;
    if(senha.length >= 6 && email) {
      return setValid(false);
    } else {
      return setValid(true);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/register')
    localStorage.setItem('user', JSON.stringify(user.email));
  };

  return (
    <div>
      <label>Email:
        <input
          type="email"
          name="email"
          value={ user.email }
          data-testid="email-input"
          onChange={ handleChange }  
        />
      </label>
      <label>Senha:
        <input
          type="password"
          name="password"
          value={ user.password }
          data-testid="password-input"
          onChange={ handleChange }
          />
      </label>
      <button type="submit" data-testid="signin-btn" disabled={ valid } onClick={ handleClick }>
        Entar
      </button>
      <button
        type="button"
        data-testid="no-account-btn"
        onClick={ handleClick }
      >
        Ainda nao tenho conta
      </button>
    </div>
  );
}

export default Login;
