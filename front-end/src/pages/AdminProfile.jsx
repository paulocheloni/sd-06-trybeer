import React from 'react';
import { Redirect } from 'react-router-dom';
import InputProfile from '../components/InputProfile';

function AdminProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const { name, email } = user;
    return (
      <div>
        <h1 data-testid="top-title">
          Perfil
        </h1>
        <InputProfile
          text={ `Nome:` }
          data="name"
          value={ name }
        />
        <InputProfile
          text={ `Email:` }
          data="email"
          value={ email }
        />
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />;
  }
}

export default AdminProfile;
