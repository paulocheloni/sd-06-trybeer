import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import MenuTop from '../components/menu/MenuTop';

import api from '../services/api';

function Profile() {
  const { name: userName, email } = JSON.parse(localStorage.user);
  const [name, setName] = useState(userName);
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateName, setUpdateName] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!localStorage.user) {
      history.push('/login');
    }
  }, [history]);

  const handleClick = async () => {
    const updateUser = { ...JSON.parse(localStorage.user), name };
    localStorage.user = JSON.stringify(updateUser);
    const resultUpdateApi = await api.updateNameOfUser(updateUser.name, updateUser.email);
    if (resultUpdateApi.result) setUpdateName(true);
  };

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    const nameStorage = JSON.parse(localStorage.user);
    if (name !== nameStorage.name) setIsDisabled(false);
    else setIsDisabled(true);
  }, [name]);

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
      { (updateName) && <span>Atualização concluída com sucesso</span> }
    </div>
  );
}

export default Profile;
