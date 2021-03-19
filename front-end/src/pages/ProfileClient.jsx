import React, { useState, useEffect } from 'react';
import { handleUpdate } from '../services/index';
import { profile } from '../api/index';
import ControllerHeader from '../components/ControllerHeader';

function ProfileClient() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [activeBtn, setActiveBtn] = useState();

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('token');
      const userLo = await profile(token);
      setUser(name, email);
    }

    setActiveBtn(false);
    fetchData();
  }, []);

  // useEffect(() => {
  //   ;
  // }, [name]);

  return (
    <div>
      <ControllerHeader title="Meu perfil" />
      <label htmlFor="name">
        Name
        <input
          name="name"
          data-testid="profile-name-input"
          onChange={ ({ target }) => setUser({ ...user, name: target.value }) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          name="email"
          // value=user.name
          data-testid="profile-email-input"
          readOnly
        />
      </label>
      <button
        type="submit"
        disabled={ !activeBtn }
        data-testid="profile-save-btn"
        onClick={ () => handleUpdate(user.name) }
      >
        Salvar
      </button>
    </div>
  );
}

export default ProfileClient;
