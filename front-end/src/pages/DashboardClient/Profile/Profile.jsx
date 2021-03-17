import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Input/Input';
import { updateUser } from '../../../services/Users';
import { updateName } from '../../../utils/localStorageHandler';

const handleSaveButton = async (name, email, setUserNameInStorage, setIsUpdated) => {
  const storage = JSON.parse(localStorage.getItem('user'));
  const { token } = storage;
  await updateUser(name, email, token);
  updateName(name);
  setUserNameInStorage(name);
  setIsUpdated(true)
};

export default function Profile() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userNameInStorage, setUserNameInStorage] = useState();
  const [isUpdated, setIsUpdated] = useState(false)
  const history = useHistory();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('user'));
    if (!storage) return history.push('/login');
    const { name, email } = storage;
    setUserName(name);
    setUserEmail(email);
    setUserNameInStorage(name);
  }, [history]);

  const setField = (field, value) => {
    if (field === 'Name') return setUserName(value);
  };

  return (
    <div>
      <Header title="Meu perfil" user="client" />
      <form>
        <Input
          title="Name"
          value={ userName }
          testId="profile-name-input"
          onChange={ setField }
        />
        <Input
          title="Email"
          value={ userEmail }
          testId="profile-email-input"
          isReadOnly
        />
        <button
          data-testid="profile-save-btn"
          type="button"
          disabled={ userName === userNameInStorage }
          onClick={ () => handleSaveButton(userName, userEmail, setUserNameInStorage, setIsUpdated) }
        >
          Salvar
        </button>
        {isUpdated && 'Atualização concluída com sucesso'}
      </form>
    </div>
  );
}
