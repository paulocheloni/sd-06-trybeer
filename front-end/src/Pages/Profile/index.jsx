import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button';
import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';
import { updateUser } from '../../Services/Apis';

import Container from './styles';

const handleSubmit = async (event, name, email, token) => {
  event.preventDefault();

  const updated = await updateUser(name, email, token);

  console.log(updated);

  if (updated.message === 'Token Inválido') localStorage.setItem('user', '');
  if (updated.name === name) localStorage.setItem(('user', JSON.stringify(updated)));
};

const button = (isDisabled) => (
  <Button
    type="submit"
    width="400px"
    heigth="40px"
    color="green"
    fontSize="20px"
    disabled={ isDisabled }
    dataTestid="signup-btn"
  >
    Salvar
  </Button>
);

const form = ([name, setNameState, email, token, isDisabled]) => (
  <form onSubmit={ (e) => handleSubmit(e, name, email, token) }>
    <h1>Register</h1>
    <label htmlFor="name-input">
      Nome
      <input
        value={ name }
        id="name-input"
        heigth="40px"
        onChange={ ({ target }) => setNameState(target.value) }
        data-testid="signup-name"
      />
    </label>
    <label htmlFor="email-input">
      Email
      <input
        value={ email }
        id="email-input"
        heigth="40px"
        disabled
        data-testid="signup-email"
        readOnly
      />
    </label>

    {button(isDisabled)}
  </form>
);

const Profile = () => {
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const dataStorage = localStorage.getItem('user');
    const { name, email } = JSON.parse(dataStorage);

    setEmailState(email);
    setNameState(name);
  }, []);

  useEffect(() => {
    const nameFormat = /^[A-Za-z ]+$/.test(nameState);
    const dataStorage = localStorage.getItem('user');
    const { name } = JSON.parse(dataStorage);
    const twelve = 12;

    setIsDisabled(!((nameFormat && nameState.length > twelve && nameState !== name)));
  }, [nameState]);

  const dataStorage = localStorage.getItem('user');
  const { token } = JSON.parse(dataStorage);
  return (
    <>
      <MenuTop />
      <SideBar />
      <Container>
        {form([nameState, setNameState, emailState, token, isDisabled])}
      </Container>
    </>
  );
};

export default Profile;
