import React from 'react';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';


export default function Profile() {
  return (
    <div>
      <Header title="Meu Perfil" user="client" />
      <form>
        <Input title="Name" testId="profile-name-input" />
        <Input title="Email" testId="profile-email-input" isReadOnly/>
        <Button title="Salvar" testId="profile-save-btn" />

      </form>
    </div>
  );
}
