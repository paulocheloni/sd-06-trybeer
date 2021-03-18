import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { handleUpdate } from '../services/index';
import ControllerHeader from '../components/ControllerHeader';

function ProfileClient() {
  const [name, setName] = useState('');

  return (
    <div>
      <ControllerHeader title="Meu perfil" />
      <label>
        Name
        <input data-testid="profile-name-input" onChange={ ({ target }) => setName(target.value) } />
      </label>
      <label>
        Email
        <input data-testid="profile-email-input" readOnly value="email@test.com" />
      </label>
      <button data-testid="profile-save-btn" onClick={ () => handleUpdate(name) }>
        Salvar
      </button>
    </div>
  );
}

export default ProfileClient;
