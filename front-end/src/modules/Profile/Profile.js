import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import LabeledInput from '../../design-components/LabeledInput';
import Button from '../../design-components/Button';
import ContextBeer from '../../context/ContextBeer';
import TopBar from '../../design-components/TopBar';

function Profile() {
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const {
    getUser,
    setUser,
  } = useContext(ContextBeer);

  const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

  function saveOnClick() {
    axios.put(`${baseUrl}/profile`, {
      name: profileName,
      email: profileEmail,
    })
      .then((response) => {
        console.log(response.data);
        setUser({ ...getUser(), name: profileName });
        setIsDisabled(true);
        setUpdatedMessage('Atualização concluída com sucesso');
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  const handleNameChange = (value) => {
    setProfileName(value);
  };

  useEffect(() => {
    const userData = getUser();
    setProfileName(userData.name);
    setProfileEmail(userData.email);
  }, [getUser]);

  useEffect(() => {
    const isButtonEnabled = (getUser().name !== profileName);
    setIsDisabled(!isButtonEnabled);
  }, [profileName, getUser]);

  return (
    <div className="rounded-md shadow-sm space-y-4">
      <TopBar
        title="Meu perfil"
        data-testid="top-title"
      />
      <LabeledInput
        value={ profileName }
        testId="profile-name-input"
        label="Nome"
        id="name"
        name="name"
        type="name"
        onChange={ handleNameChange }
        autoComplete="name"
      />
      <LabeledInput
        value={ profileEmail }
        testId="profile-email-input"
        label="Email"
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        onChange={ profileEmail }
        readOnly
      />
      <Button
        onClick={ () => saveOnClick() }
        isDisabled={ isDisabled }
        bgColor="green-600"
        testId="profile-save-btn"
      >
        Salvar
      </Button>
      <span>{updatedMessage}</span>
    </div>
  );
}

export default Profile;
