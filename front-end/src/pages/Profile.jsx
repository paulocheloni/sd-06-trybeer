import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import { updateUser } from '../services/users';

function Profile() {
  const { name, email, token, role } = JSON.parse(localStorage.getItem('user'));
  const [userName, setUserName] = useState(name);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (userName !== name) setIsDisabled(false);
    else setIsDisabled(true);
  }, [name, userName]);

  const handleSubmit = async () => {
    await updateUser(userName, email);

    localStorage.setItem('user', JSON.stringify({ name: userName, email, token, role }));

    setIsVisible(false);

    setTimeout(() => setIsVisible(true), 1500)
  };

  return (
    <div>
      <TopBar name="Meu perfil" />
      <label htmlFor="profileNameInput">
        Nome
        <input
          id="profileNameInput"
          data-testid="profile-name-input"
          value={ userName }
          onChange={ (e) => setUserName(e.target.value) }
        />
      </label>
      <label htmlFor="profileEmailInput">
        Email
        <input
          id="profileEmailInput"
          data-testid="profile-email-input"
          value={ email }
          readOnly
        />
      </label>
      <button
        type="button"
        data-testid="profile-save-btn"
        disabled={ isDisabled }
        onClick={ handleSubmit }
      >
        Salvar
      </button>
      <div hidden={isVisible}>Atualização concluída com sucesso</div>
    </div>
  );
}

export default Profile;
