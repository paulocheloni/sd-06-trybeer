import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { loadState } from '../services/localStorage';
import NavBarAdmin from '../components/menuNavBarAdmin';

function ProfileAdmin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    setName(logon.name);
    setEmail(logon.email);
  }, [history]);

  return (
    <div>
      <NavBarAdmin content="Perfil" />
      <p data-testid="profile-name">
        Nome:
        {' '}
        {name}
      </p>
      <p data-testid="profile-email">
        Email:
        {' '}
        {email}
      </p>
    </div>
  );
}

export default ProfileAdmin;
