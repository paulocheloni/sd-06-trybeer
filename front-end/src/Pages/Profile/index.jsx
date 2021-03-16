import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import Axios from 'axios';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Menu from '../../Components/Menu';
import * as S from './style';

const Profile = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (!localStorage.token || localStorage.token === '') history.push('/');
  }, [history]);
  const updateUser = async () => {
    // try {
    // const request = await Axios.put(url api, { name });
    // const data = await request.data;
    // if(typeof data === 'string) throw new Error();
    // } catch (error) {
    //    alert('Ocorreu um erro', error)
    // }

    console.log('update user');
  };
  useEffect(() => {
    // const fetchUser = async () => {
    //   const token = JSON.stringify(localStorage.token);
    //   const request = await Axios.get(url api, { headers: { 'Authorization':  token } });
    //   const data = await request.data;
    //   setEmail(data.email);
    //   setName(data.name);
    // };
  }, []);
  return (
    <S.Container>
      <Menu><S.Title data-testid="top-title">Meu perfil</S.Title></Menu>
      <Input
        name="Nome"
        type="text"
        onChange={ ({ target }) => setName(target.value) }
        dataTestId="profile-name-input"
        value={ name }
      />
      <Input
        name="Email"
        type="email"
        dataTestId="profile-email-input"
        value={ email }
      />
      <Button dataTestId="profile-save-btn" onClick={ updateUser }>Salvar</Button>
    </S.Container>
  );
};

export default Profile;
