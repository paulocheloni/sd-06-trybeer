import React from 'react';
import { Redirect } from 'react-router-dom';
import MenuTop from '../components/MenuTop';
import AdminOrdersCard from '../components/AdminOrdersCard';

function OrdersAdm() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (
      <div>
        <MenuTop title="Trybeer" />
        <h1>Pedidos Pendentes</h1>
        <AdminOrdersCard />
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />;
  }
}

export default OrdersAdm;
