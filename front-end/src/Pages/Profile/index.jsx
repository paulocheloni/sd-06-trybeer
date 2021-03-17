import React, { useEffect, useState } from 'react';

import { BiUser } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { updateUser } from '../../Services/Apis';

import Button from '../../Components/Button';
import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';
import Input from '../../Components/Input';

import Container from './styles';

const handleSubmit = async (event, { name, email }, token, setUpdateMessage) => {
  event.preventDefault();

  const updated = await updateUser(name, email, token);

  // console.log(updated);

  if (updated.message === 'Token Inválido') localStorage.setItem('user', '{}');
  if (updated.name === name) localStorage.setItem('user', JSON.stringify(updated));

  setUpdateMessage(true);
};

const button = (isDisabled) => (
  <Button
    type="submit"
    heigth="40px"
    color="green"
    fontSize="20px"
    disabled={ isDisabled }
    dataTestid="profile-save-btn"
  >
    Salvar
  </Button>
);

const form = ([
  name,
  setNameState,
  email,
  token,
  isDisabled,
  updateMessage,
  setUpdateMessage,
]) => {
  const user = { name, email };
  const theme = JSON.parse(localStorage.getItem('@trybeer:theme'));

  return (
    <form onSubmit={ (e) => handleSubmit(e, user, token, setUpdateMessage) }>
      <h1 data-testid="top-title">Meu perfil</h1>
      <Input
        id="name-input"
        value={ name }
        label="Nome"
        dataTestid="profile-name-input"
        onChange={ ({ target }) => setNameState(target.value) }
        themeStorage={ theme && theme.title }
        icon={ BiUser }
      />
      <Input
        id="email-input"
        value={ email }
        label="Email"
        dataTestid="profile-email-input"
        readOnly
        themeStorage={ theme && theme.title }
        icon={ FiMail }
      />

      {button(isDisabled)}

      {(updateMessage) ? <p>Atualização concluída com sucesso</p> : null}
    </form>
  );
};

const Profile = () => {
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateMessage, setUpdateMessage] = useState(false);

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
      <MenuTop dataTestid="top-title" title="Meu perfil" />
      <SideBar />
      <Container>
        {form([
          nameState,
          setNameState,
          emailState,
          token,
          isDisabled,
          updateMessage,
          setUpdateMessage,
        ])}
      </Container>
    </>
  );
};

export default Profile;
