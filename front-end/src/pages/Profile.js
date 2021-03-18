import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { getLocal, sendNewName } from '../services/profileService';
import InputProfile from '../services/InputProfile';

function Profile() {
  const history = useHistory();
  const [disableButton, setDisableButton] = useState(true);
  const [editedName, setEditedName] = useState('');
  const [nameLocal, setNameLocal] = useState('');
  const [emailLocal, setEmailLocal] = useState('');
  const [existsLocal, setExistsLocal] = useState(false);
  useEffect(() => {
    getLocal({ setEditedName, setNameLocal, setEmailLocal, setExistsLocal, history });
  }, []);
  useEffect(() => {
    if (editedName !== nameLocal) setDisableButton(false);
    else setDisableButton(true);
  }, [editedName]);
  function handleChangeName(event) { setEditedName(event.target.value); }
  return (
    <div id="div-profile">
      <TopBar title="Meu perfil" />
      {existsLocal === true
        ? (
          <form>
            <InputProfile
              title="Name"
              id="profile-name-input"
              type="text"
              value={ editedName }
              callback={ (e) => handleChangeName(e) }
            />
            <label htmlFor="profile-email-input">
              Email
              <input
                type="email"
                data-testid="profile-email-input"
                value={ emailLocal }
                readOnly
              />
            </label>
            <button
              type="button"
              data-testid="profile-save-btn"
              disabled={ disableButton }
              onClick={ () => sendNewName(editedName, emailLocal) }
            >
              Salvar
            </button>
          </form>
        ) : null}
    </div>
  );
}

export default Profile;
