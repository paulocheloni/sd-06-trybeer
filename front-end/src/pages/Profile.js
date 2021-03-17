import React, { useState, useContext, useEffect } from 'react';
import TrybeerContext from '../context/TrybeerContext';
import api from '../services/api';
import TopBar from '../components/TopBar';

function Profile() {
  // const { user: { email } } = useContext(TrybeerContext);
  const [enableButton, setEnableButton] = useState(true);
  const [editedName, setEditedName] = useState('');
  const [name, setName] = useState("");

  async function pegaEmail() {
    const result = await api.post('profile', {
      "email": "email@email.com"
    }).then(response => response.data)
    .catch(err => console.log('erro', err))
    return setName(result);
  }

  useEffect(() => {
    pegaEmail();
    // fazer umg get passando o email
    // response vem como nome, setName(nome da response)
    // api.put('/profile', {
    //   data: 'batatinha'
    //   },
    //   {
    //   headers: {
    //     authorization: localStorage.getItem("token"),
    //   // "content-type": "application/json",
    //   }
    // })
  }, [])


  function handleButton(event) {
    event.preventDefault();
    setEditedName(event.target.value);
    if (editedName !== name) setEnableButton(false);
  }

  // function sendNewName () {
  //   useEffect(() => {
  //     // put enviando o novo nome
  //   })
  // }

  return (
    <div>
      <TopBar />
      <form>
        <label>
          Name
          <input type="text" data-testid="profile-name-input" value={name} onChange={ (event) => handleButton(event) }/>
        </label>

        <label>
          Email
          <input type="email" data-testid="profile-email-input" value="email@email.com" readonly/>
        </label>

        <button type="button" data-testid="profile-save-btn" disabled={enableButton} /* onClick={ sendNewName } */ >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default Profile;
