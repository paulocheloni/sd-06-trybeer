import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import SideBarAdmin from '../components/SideBarAdmin';
import BeersAppContext from '../context/BeersAppContext';

function AdminProfile() {
  const history = useHistory();
  const {
    user: { name, email, token },
  } = useContext(BeersAppContext);

  if (!token) history.push('/login');

  return (
    <div className="admin_profile">
      <SideBarAdmin />
      <p data-testid="profile-name">
        Nome:
        <span>{ name }</span>
      </p>
      <p data-testid="profile-email">
        Email:
        <span>{ email }</span>
      </p>
    </div>
  );
}

export default AdminProfile;
