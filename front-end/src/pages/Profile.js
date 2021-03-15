import React, { useState } from 'react';
import SidebarMenu from '../components/SideBarMenu';
import TopMenu from '../components/TopMenu';

function Profile() {
  const name = 'Vinicius';
  const [disabled, setDisabled] = useState(true);

  const onChangeName = ({ target: { value } }) => {
    if (name === value) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <div>
      <TopMenu
        titleMenu="Meu perfil"
      />
      <SidebarMenu />
      <div className="content-panel">
        <label htmlFor="name">
          Name
          <input
            data-testid="profile-name-input"
            type="text"
            name="name"
            placeholder="Nome"
            id="name"
            onChange={ onChangeName }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            readOnly="readonly"
            data-testid="profile-email-input"
            type="text"
            name="email"
            placeholder="Email"
            id="email"
          />
        </label>
        <button
          data-testid="profile-save-btn"
          type="submit"
          disabled={ disabled }
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Profile;
