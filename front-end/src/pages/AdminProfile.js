import React from 'react';
import withAuth from '../components/withAuth';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';

import { Container, Content, Message } from '../components/styled-components';

function AdminProfile() {
  const user = JSON.parse(localStorage.getItem('user'));

  const { name, email } = user;
  return (
    <div>
      <Header />
      <NavbarAdmin />
      <Container>
        <Content>
          <Message
            data-testid="profile-name"
          >
            { `Nome: ${name}` }
          </Message>
          <Message
            data-testid="profile-email"
          >
            { `Email: ${email}` }
          </Message>
        </Content>
      </Container>
    </div>
  );
}

export default withAuth(AdminProfile);
