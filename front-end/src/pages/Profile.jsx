import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import TopMenu from '../components/TopMenu';
import { isTheNewNameDifferent, nameValidation } from '../utils/validations';
import useInput from '../hooks/useInput';
import fetches from '../services/fetches';

export default function Profile() {
  // const history = useHistory();
  const tokenFromLocalStorage = localStorage.getItem('token');
  const tokenDecoded = jwtDecode(tokenFromLocalStorage);
  const oldName = tokenDecoded.name;

  const [name, setName] = useInput(tokenDecoded.name);

  const [newInfo, setNewInfo] = useState('');

  const handleUpdateInfo = async (email) => {
    await fetches.updateUserName(email, name);
    setNewInfo('Atualização concluída com sucesso');
  };

  // useEffect(() => {
  //   if (!tokenFromLocalStorage) history.push('/login');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <TopMenu
        data-testid="top-title"
        pageTitle="Meu perfil"
      />
      <fieldset>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            data-testid="profile-name-input"
            value={ name }
            onChange={ setName }
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            readOnly
            data-testid="profile-email-input"
            value={ tokenDecoded.email }
          />
        </label>
      </fieldset>
      <button
        type="submit"
        data-testid="profile-save-btn"
        disabled={ !(nameValidation(name) && isTheNewNameDifferent(oldName, name)) }
        onClick={ () => handleUpdateInfo(tokenDecoded.email) }
      >
        <div>
          { newInfo }
        </div>
        Salvar
      </button>
    </div>
  );
}
