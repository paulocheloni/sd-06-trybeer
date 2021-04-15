import React from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';

import { Container, Content, Message } from '../components/styled-components';

export default function AdminProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Redirect to="/login" />;
  }

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
