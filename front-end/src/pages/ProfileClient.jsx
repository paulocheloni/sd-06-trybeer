import React, { useState } from 'react';
import { handleUpdate } from '../services/index';
import ControllerHeader from '../components/ControllerHeader';

function ProfileClient() {
  const [name, setName] = useState('');

  return (
    <div>
      <ControllerHeader title="Meu perfil" />
      <label htmlFor="name">
        Name
        <input
          name="name"
          data-testid="profile-name-input"
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          name="email"
          data-testid="profile-email-input"
          readOnly
        />
      </label>
      <button
        type="submit"
        data-testid="profile-save-btn"
        onClick={ () => handleUpdate(name) }
      >
        Salvar
      </button>
    </div>
  );
}

export default ProfileClient;
