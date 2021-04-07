import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { edit } from '../api/axiosApi';
import UserContext from '../context/UserContext';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { Container, Content, Input, Button, Message } from '../styles/styles';

export default function Profile() {
  const history = useHistory();

  const { loginUser, setLoginUser } = useContext(UserContext);
  // console.log(loginUser.name, "loginUser");
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  const localStorageProfile = JSON.parse(localStorage.getItem('user'));
  // console.log(localStorageProfile, "localStorageProfile");

  if (localStorageProfile === null) {
    history.push('./login');
    return null;
  }

  const idProfile = localStorageProfile.id;
  // console.log(idProfile, "id");
  const nameProfile = localStorageProfile.name;
  // console.log(nameProfile, "NAME");
  const emailProfile = localStorageProfile.email;
  // console.log(emailProfile, "EMAIL");

  const handleProfile = async (id, name, email) => {
    id = idProfile;
    name = loginUser.name;
    email = emailProfile;
    setConfirmationMessage(true);
    await edit(id, name, email);
  };

  return (
    <div>
      <Header />
      <Navbar
        title="Meu perfil"
        data-testid="top-title"
        className="top-title"
      />
      <Container>
        <Content>
          <div>
            {/* <img alt="profile" /> */}
            <Input
              name="name"
              data-testid="profile-name-input"
              placeholder={ nameProfile }
              onChange={ (event) => setLoginUser(
                { ...loginUser, name: event.target.value },
              ) }
            />
            <Input
              placeholder="Email"
              readOnly
              data-testid="profile-email-input"
              value={ emailProfile }
            />
            <Button
              type="button"
              data-testid="profile-save-btn"
              disabled={ loginUser.name === '' }
              onClick={ () => handleProfile() }
            >
              Salvar
            </Button>
            {confirmationMessage && <Message>Atualização concluída com sucesso</Message>}
          </div>

        </Content>
      </Container>
    </div>
  );
}
