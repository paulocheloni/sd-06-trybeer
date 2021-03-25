import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBarAdm from '../components/SideBarAdm';

function ProfileAdm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
      <div data-testid="profile-name">
        {`Nome: ${name}`}
      </div>
      <div data-testid="profile-email">
        {`Email: ${email}`}
      </div>
    </div>
  );
}

export default ProfileAdm;
