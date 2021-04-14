import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';

import { Container, Content } from '../components/styled-components';

const getUser = () => localStorage.getItem('user');

export default function AdminProfile() {
  const user = getUser();
  const history = useHistory();

  if (!user) {
    history.push('/login');
    window.location.reload();
  }

  const { name, email } = user;

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
