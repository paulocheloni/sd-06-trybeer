import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBarAdm from '../components/SideBarAdm';

function ProfileAdm() {
  // const { name, email } = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      history.push('/login');
    } else { 
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  return (
    <div>
      <h1> Perfil </h1>
      <SideBarAdm />
      <label htmlFor="nameAdm">
        Nome
        <input id="nameAdm" data-testid="profile-name" value={ name } readOnly />
      </label>
      <label htmlFor="emailAdm">
        Email
        <input id="emailAdm" data-testid="profile-email" value={ email } readOnly />
      </label>
    </div>
  );
}

export default ProfileAdm;
