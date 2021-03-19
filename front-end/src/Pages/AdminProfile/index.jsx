import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { BiUser } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { updateUser } from '../../Services/Apis';

import MenuTopAdmin from '../../Components/MenuTopAdmin';
import SideBarAdmin from '../../Components/SideBarAdmin';
import Input from '../../Components/Input';
import LogoTryBeer from '../../Components/LogoTryBeer';

import S from './styles';

const handleSubmit = async (event, { name, email }, token, setUpdateMessage) => {
  event.preventDefault();

  const updated = await updateUser(name, email, token);

  // console.log(updated);

  if (updated.message === 'Token Inválido') localStorage.setItem('user', '{}');
  if (updated.name === name) localStorage.setItem('user', JSON.stringify(updated));

  setUpdateMessage(true);
};

const form = ([
  name,
  setNameState,
  email,
  token,
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
        dataTestid="profile-name"
        onChange={ ({ target }) => setNameState(target.value) }
        themeStorage={ theme && theme.title }
        icon={ BiUser }
      />
      <Input
        id="email-input"
        value={ email }
        label="Email"
        dataTestid="profile-email"
        readOnly
        themeStorage={ theme && theme.title }
        icon={ FiMail }
      />

    </form>
  );
};

const AdminProfile = () => {
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateMessage, setUpdateMessage] = useState(false);

  const { stateSideBar } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user'));

    if (!userToken) history.push('/login');
  }, [history]);

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
      <MenuTopAdmin dataTestid="top-title" title="Meu perfil" />

      <S.Context>
        <SideBarAdmin />

        <S.Container stateSideBar={ stateSideBar }>

          <LogoTryBeer />

          {form([
            nameState,
            setNameState,
            emailState,
            token,
            isDisabled,
            updateMessage,
            setUpdateMessage,
          ])}
        </S.Container>
      </S.Context>
    </>
  );
};

export default AdminProfile;
