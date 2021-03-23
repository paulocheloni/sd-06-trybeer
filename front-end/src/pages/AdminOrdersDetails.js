import React from 'react';
import SideBarAdmin from '../components/SideBarAdmin';

import './Admin.css';

function AdminOrdersDetails() {
  return (
    <div className="div-main">
      <SideBarAdmin />
      <div className="div-filha">
        <h1 className="title">Admin Orders Details</h1>
      </div>
    </div>
  );
}

export default AdminOrdersDetails;
