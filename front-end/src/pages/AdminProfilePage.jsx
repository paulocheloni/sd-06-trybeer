import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AdminSideBarComponent from '../components/AdminSideBarComponent';
import BeersAppContext from '../context/BeersAppContext';

function AdminProfilePage() {
  const history = useHistory();
  const {
    user: { name, email, token },
  } = useContext(BeersAppContext);

  if (!token) history.push('/login');

  return (
    <div className="admin_profile">
      <AdminSideBarComponent />
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

export default AdminProfilePage;
