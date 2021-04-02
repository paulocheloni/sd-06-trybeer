import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { edit } from '../api/axiosApi';
import TrybeerContext from '../context/TrybeerContext';

export default function Profile() {
  const history = useHistory();

  const { loginUser, setLoginUser } = useContext(TrybeerContext);
  // console.log(loginUser.name, "loginUser");
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  const localStorageProfile = JSON.parse(localStorage.getItem('user'));
  // console.log(localStorageProfile, "localStorageProfile");

  if (localStorageProfile === null) {
    history.push('./login');
    return null;
  }

  const idProfile = localStorageProfile.id;
  // console.log(idProfile, "id");
  const nameProfile = localStorageProfile.name;
  // console.log(nameProfile, "NAME");
  const emailProfile = localStorageProfile.email;
  // console.log(emailProfile, "EMAIL");

  const handleProfile = async (id, name, email) => {
    id = idProfile;
    name = loginUser.name;
    email = emailProfile;
    setConfirmationMessage(true);
    await edit(id, name, email);
  };

  return (
    <div>
      {/* <TopBar
      title="Meu perfil"
      data-testid="top-title"
      /> */}
      <div className="profile-container">
        <div>
          <img alt="profile" />
          <input
            name="name"
            data-testid="profile-name-input"
            placeholder={ nameProfile }
            onChange={ (event) => setLoginUser(
              { ...loginUser, name: event.target.value },
            ) }
          />
          <input
            placeholder="Email"
            readOnly
            data-testid="profile-email-input"
            value={ emailProfile }
          />
          <button
            type="button"
            data-testid="profile-save-btn"
            disabled={ loginUser.name === '' }
            onClick={ () => handleProfile() }
          >
            Salvar
          </button>
          {confirmationMessage && <p>Atualização concluída com sucesso</p>}
        </div>
      </div>
    </div>
  );
}
