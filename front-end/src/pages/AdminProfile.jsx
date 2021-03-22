import React from 'react';
import { Redirect } from 'react-router';
import MenuTopAdmin from '../components/MenuTopAdmin';

export default function AdminProfile() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return <Redirect to="login" />;

  return (
    <div>
      <MenuTopAdmin />
      <h1>Perfil</h1>
      <p data-testid="profile-name">{`Nome: ${user.name}`}</p>
      <p data-testid="profile-email">{`Email: ${user.email}`}</p>
    </div>
  );
}
