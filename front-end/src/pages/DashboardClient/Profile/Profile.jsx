import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Input/Input';
import { updateUser } from '../../../services/Users'

const handleSaveButton = async (name, email) => {
  console.log('clicou no botão')
  const storage = JSON.parse(localStorage.getItem('user'))
  const { token } = storage
  const apiResponse = await updateUser(name, email, token)
  console.log(apiResponse)
}

export default function Profile() {
  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userNameInStorage, setUserNameInStorage] = useState()
  const history = useHistory()

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('user'))
    if(!storage) return history.push('/login')
    const { name, email } = storage
    setUserName(name)
    setUserEmail(email)
    setUserNameInStorage(name)
  }, [])

  const setField = (field, value) => {
    if (field === 'Name') return setUserName(value);
  };

  return (
    <div>
      <Header title="Meu Perfil" user="client" />
      <form>
        <Input title="Name" value={ userName } testId="profile-name-input" onChange={ setField }/>
        <Input title="Email" value={ userEmail } testId="profile-email-input" isReadOnly />
        <button
          data-testid="profile-save-btn" 
          disabled={ userName ===  userNameInStorage }
          onClick={() => handleSaveButton(userName, userEmail)}
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
