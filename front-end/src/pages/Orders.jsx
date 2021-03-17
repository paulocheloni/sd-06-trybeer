import React from 'react';
import MenuTop from '../components/menuTop';
import { Redirect } from 'react-router-dom';

function Orders() {
  let urlRoute = '';
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.role) {
      user.role === 'administrator'
        ?  urlRoute='/admin'
        :  urlRoute='';
    }
  return (
    <div>
      <MenuTop title={"Trybeer"}/>
    </div>
  )
  } catch (err) {
    return <Redirect to="/login" />;
  }
}


export default Orders;
