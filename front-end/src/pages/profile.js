import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { loadState } from '../services/localStorage';
import api from '../services/api';
import NavBar from '../components/menuNavBar';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [attSucess, setAttSucess] = useState(false);
  const history = useHistory();

  const validates = useCallback(() => {
    const regex = /^[a-zA-Z ]{2,30}$/;
    const eleven = 11;

    if (regex.test(name)
    && name.length > eleven) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [name]);

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    setEmail(logon.email);
  }, [history]);

  useEffect(() => {
    validates();
  }, [validates]);

  const updateUserName = () => {
    api.updateUser(name, email)
      .then((response) => {
        if (response.data === 1) {
          console.log('Nome alterado com sucesso!');
          setAttSucess(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar content="Meu perfil" />
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
      <button
        type="button"
        disabled={ disabled }
        onClick={ updateUserName }
        data-testid="profile-save-btn"
      >
        Salvar
      </button>
      {
        attSucess && <> Atualização concluída com sucesso </>
      }
    </div>
  );
}

export default Profile;
