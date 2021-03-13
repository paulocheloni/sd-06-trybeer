import React, { useEffect, useState } from 'react';

function Signup({ history }) {
  const [checked, setChecked] = useState(false);
  const [valid, setValid] = useState(true);
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  
  const handleCheck = () => setChecked(!checked);
  
  const isValid = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const email = emailRegex.test(user.email);
    const password = user.password;
    const minLength = 6;
    const nameInput = user.name
    const nameRegex =  /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    const name = nameRegex.test(user.name);
    const minNameLength = 12;
    if(password.length >= minLength && email && !name && nameInput.length > minNameLength) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  
  useEffect(()=> {
    isValid();
  }, [user.name, user.password, user.email]);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value});
  };

  const handleClick = (e) => {
    e.preventDefault();

    if(checked === true) {
      history.push('admin/Home');
    } else {
      history.push('/products');
    };
  };

  return(
    <>
      <forms >
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            name="name"
            value={ user.name }
            data-testid="signup-name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={ user.email }
            data-testid="signup-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            name="password"
            value={ user.password }
            data-testid="signup-password"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="vender">
          Quero vender
          <input
            type="checkbox"
            data-testid="signup-seller"
            defaultChecked={ checked }
            onChange={ handleCheck }
          />
        </label>
        <button
          id="sign-up"
          type="button"
          data-testid="signup-btn"
          disabled={ valid }
          onClick={ handleClick }
        >
          Cadastrar
        </button>
      </forms>
    </>
  )
};

export default Signup;
