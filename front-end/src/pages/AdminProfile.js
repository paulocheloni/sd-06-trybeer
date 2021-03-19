import React from 'react';
import SideBarAdmin from '../components/SideBarAdmin';

import './Admin.css';

function AdminProfile() {
  return (
    <div className="div-main">
      <SideBarAdmin />
      <h1 className="title">Admin Profile</h1>
    </div>
  );
}

export default AdminProfile;
