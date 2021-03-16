import React, { useEffect, useState } from 'react';
import MenuTop from '../components/menu/MenuTop';
import { useHistory } from 'react-router';

function Profile() {
  const [name, setName] = useState('fulano');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.user) {
      history.push('/login');
    };
  }, []);

  // const { email, name: storageName } = localStorage.user;
  const email = localStorage.user;

  const handleClick = () => {
    // localStorage.setItem('user', JSON.stringify(name));
    // localStorage.user = JSON.stringify(name);
  }

  const handleChange = ({ target }) => {
    setName(target.value);
    setIsDisabled(false);
  }

  return (
    <div>
      <MenuTop name="Meu Perfil" />
      <label>
        Nome:
      </label>
      <input
        value={name}
        data-testid="profile-name-input"
        onChange={(e) => handleChange(e)}
      />
      <label>
        Email:
      </label>
      <input
        readOnly
        value={email}
        data-testid="profile-email-input" />
      <button
        data-testid="profile-save-btn"
        disabled={isDisabled}
        onClick={handleClick}
      >
        Salvar
      </button>
    </div >
  );
}

export default Profile;
