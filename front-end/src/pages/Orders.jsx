import React from 'react';
import { Redirect } from 'react-router-dom';
import MenuTop from '../components/menuTop';

function Orders() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (
      <div>
        <MenuTop title="Trybeer" />
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />
  }
}

export default Orders;
