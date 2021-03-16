import React, { useEffect, useState } from 'react';
import { loadState } from '../services/localStorage';
import { useHistory } from 'react-router';
import api from '../services/api';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const logon = loadState('user');
    if(!logon) return history.push('/login');
    setEmail(logon.email);
  }, []);

  const updateUserName = () => {
    api.updateUser(name, email)
    .then((response) => {
      if(response.data === 1) console.log('Nome alterado com sucesso!');
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Profile</h1>
      <label htmlFor="signup-name">
        Nome
        <input
          type="text"
          data-testid="profile-name-input"
          placeholder="digite seu Nome"
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <label htmlFor="signup-email">
        Email
        <input
          type="text"
          data-testid="profile-email-input"
          value={ email }
          readOnly
        />
      </label>
      <button type="button" onClick={updateUserName} data-testid="profile-save-btn">Salvar</button>
    </div>
  );
}

export default Profile;