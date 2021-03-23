import React from 'react';
import AdminSideBar from '../components/AdminSideBar';
import '../css/General.css';
import '../css/AdminOrders.css';

function AdminOrders() {
  return (
    <div className="admin-container">
      <h1>Pedidos Pendentes</h1>
      <div>
        <AdminSideBar />
        <section className="orders-list" />
      </div>
    </div>
  );
}

export default AdminOrders;
