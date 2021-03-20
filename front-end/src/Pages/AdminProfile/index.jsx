import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { BiUser } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { GlobalContext } from '../../Contexts/GlobalContext';

import MenuTopAdmin from '../../Components/MenuTopAdmin';
import SideBarAdmin from '../../Components/SideBarAdmin';
import Input from '../../Components/Input';
import LogoTryBeer from '../../Components/LogoTryBeer';

import S from './styles';

const profile = ([
  name,
  setNameState,
  email,
]) => {
  const theme = JSON.parse(localStorage.getItem('@trybeer:theme'));

  return (
    <S.ContextProfile>
      <h1 data-testid="top-title">Meu perfil</h1>
      <Input
        id="name-input"
        value={ name }
        label="Nome"
        width="100%"
        widthDivLabel="100%"
        dataTestid="profile-name"
        onChange={ ({ target }) => setNameState(target.value) }
        themeStorage={ theme && theme.title }
        icon={ BiUser }
        readOnly
      />
      <Input
        id="email-input"
        value={ email }
        label="Email"
        width="100%"
        widthDivLabel="100%"
        dataTestid="profile-email"
        readOnly
        themeStorage={ theme && theme.title }
        icon={ FiMail }
      />

    </S.ContextProfile>
  );
};

const AdminProfile = () => {
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [updateMessage, setUpdateMessage] = useState(false);

  const { stateSideBarAdmin } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem('user'));

    if (!dataStorage) history.push('/login');

    let name = '';
    let email = '';

    if (!dataStorage) {
      history.push('/login');
    } else {
      name = dataStorage.name;
      email = dataStorage.email;
    }

    setEmailState(email);
    setNameState(name);
  }, [history]);

  return (
    <>
      <MenuTopAdmin dataTestid="top-title" title="Meu perfil" />

      <S.Context>
        <SideBarAdmin />

        <S.Container stateSideBar={ stateSideBarAdmin }>

          <LogoTryBeer />

          {profile([
            nameState,
            setNameState,
            emailState,
            updateMessage,
            setUpdateMessage,
          ])}
        </S.Container>
      </S.Context>
    </>
  );
};

export default AdminProfile;
