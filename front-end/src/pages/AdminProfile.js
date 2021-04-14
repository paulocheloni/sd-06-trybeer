import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';

import { Container, Content } from '../components/styled-components';
// import { Input, Button, Message } from '../styles/styles';
import Input from '../components/Input';

export default function AdminProfile() {
  const dataUserFromStorage = JSON.parse(localStorage.user);
  const { name, email } = dataUserFromStorage;
  const history = useHistory();

  console.log('sorto')
  console.log(name)
  if (dataUserFromStorage === null) {
    history.push('./login');
    return null;
  }



  return (
    <div>
      <Header />
      <NavbarAdmin />
      <Container>
        <Content>
          <span
            data-testid="profile-name"
          >
            { `Nome: ${name}` }
          </span>
          <span
            data-testid="profile-email"
          >
            { `Email: ${email}` }
          </span>
        </Content>
      </Container>
    </div>
  );
}
