import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import MenuTop from '../components/menu/MenuTop';

function Profile() {
  const [name, setName] = useState('fulano');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.user) {
      history.push('/login');
    }
  }, [history]);

  // const { email, name: storageName } = localStorage.user;
  const email = localStorage.user;

  const handleClick = () => {
    // localStorage.setItem('user', JSON.stringify(name));
    // localStorage.user = JSON.stringify(name);
  };

  const handleChange = ({ target }) => {
    setName(target.value);
    setIsDisabled(false);
  };

  return (
    <div>
      <MenuTop name="Meu perfil" />
      <label htmlFor="name">
        Nome:
        <input
          value={ name }
          data-testid="profile-name-input"
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          readOnly
          value={ email }
          data-testid="profile-email-input"
        />
      </label>
      <button
        type="button"
        data-testid="profile-save-btn"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Salvar
      </button>
    </div>
  );
}

export default Profile;
