import React, { useEffect, useState } from 'react';

import { registerUser } from '../../Services/Apis';

import Container from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import CheckBox from '../../Components/CheckBox';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  // console.log(isChecked);

  useEffect(() => {
    const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(email);
    const six = 6;
    const minPasswordLength = password.length >= six;
    if (emailFormat && minPasswordLength && name.length > 12) {
      setIsDisabled(false);
    }
  }, [name, email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let role = '';

    isChecked === true ? role = 'admin' : role = 'client';

    const user = await registerUser(name, email, password, role);
  };

  return (
    <Container>
      <form onSubmit={ handleSubmit }>
        <h1>Register</h1>
        <Input
          placeholder="Nome"
          width="400px"
          heigth="40px"
          fontSize="16px"
          onChange={ ({ target }) => setName(target.value) }
          dataTestid="signup-name"
        />
        <Input
          placeholder="Email"
          width="400px"
          heigth="40px"
          fontSize="16px"
          onChange={ ({ target }) => setEmail(target.value) }
          dataTestid="signup-email"
        />
        <Input
          placeholder="Senha"
          width="400px"
          heigth="40px"
          fontSize="16px"
          onChange={ ({ target }) => setPassword(target.value) }
          dataTestid="signup-password"
        />
        <label>
          <CheckBox
            type="checkBox"
            width="20px"
            height="20px"
            checked={ isChecked }
            onChange={ ({ target }) => setIsChecked(target.checked) }
            dataTestid="signup-seller"
          />
          Quero vender
        </label>
        <Button
          type="submit"
          width="400px"
          heigth="40px"
          color="green"
          fontSize="20px"
          // disabled
          dataTestid="signup-btn"
        >
          CADASTRAR
        </Button>
      </form>
    </Container>
  );
};

export default Register;
