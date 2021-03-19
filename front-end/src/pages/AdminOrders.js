import React from 'react';
import SideBarAdmin from '../components/SideBarAdmin';

import './Admin.css';

function AdminOrders() {
  return (
    <div className="div-main">
      <SideBarAdmin />
      <div className="div-filha">
        <h1 className="title">Admin Orders</h1>
        <h2>Teste</h2>
      </div>
    </div>
  );
}

export default AdminOrders;
