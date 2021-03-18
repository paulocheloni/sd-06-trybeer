import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import ContextBeer from '../../../context/ContextBeer';

function AdminProfile() {
  const history = useHistory();
  const {
    getUser,
  } = useContext(ContextBeer);

  useEffect(() => {
    if (!getUser()) {
      history.push('/');
    }
  }, [getUser, history]);

  return (
    <div>
      <SideBarAdmin />
      <h1>Perfil</h1>
      <p data-testid="profile-name">
        Nome:
        { getUser() && getUser().name }
      </p>
      <p data-testid="profile-email">
        Email:
        {getUser() && getUser().email}
      </p>
    </div>
  );
}

export default AdminProfile;
