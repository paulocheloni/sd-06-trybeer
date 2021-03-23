import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// import { BiUser } from 'react-icons/bi';
// import { FiMail } from 'react-icons/fi';
import { GlobalContext } from '../../Contexts/GlobalContext';

import MenuTopAdmin from '../../Components/MenuTopAdmin';
import SideBarAdmin from '../../Components/SideBarAdmin';
// import Input from '../../Components/Input';
// import LogoTryBeer from '../../Components/LogoTryBeer';

import S from './styles';

// const theme = JSON.parse(localStorage.getItem('@trybeer:theme'));
const profile = (name, email) => (
  <S.ContextProfile>
    {/* <Input
        value={ name }
        label="Nome"
        width="100%"
        widthDivLabel="100%"
        dataTestid="profile-name"
        themeStorage={ theme && theme.title }
        icon={ BiUser }
        readOnly
      />
      <Input
        value={ email }
        label="Email"
        width="100%"
        widthDivLabel="100%"
        dataTestid="profile-email"
        themeStorage={ theme && theme.title }
        icon={ FiMail }
        readOnly
      /> */}
    <span data-testid="profile-name">{ name }</span>
    <span data-testid="profile-email">{ email }</span>

  </S.ContextProfile>
);

const AdminProfile = () => {
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');

  const { stateSideBarAdmin } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem('user'));

    if (!dataStorage) {
      history.push('/login');
    } else {
      setEmailState(dataStorage.email);
      setNameState(dataStorage.name);
    }
  }, [history]);

  return (
    <>
      <MenuTopAdmin dataTestid="top-title" title="Meu perfil" />

      <S.Context>
        <SideBarAdmin />

        <S.Container stateSideBar={ stateSideBarAdmin }>

          {profile(nameState, emailState)}
        </S.Container>
      </S.Context>
    </>
  );
};

export default AdminProfile;
