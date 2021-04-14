import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';

const getUser = () => localStorage.getItem('user');

console.log('numsei')

const AdminOrders = () => {
  const user = getUser();
  const history = useHistory();

  if (!user) {
    history.push('/login');
    window.location.reload();
  }
  return (
    <div>
      <h1>
        {' '}
        { user }
        {' '}
      </h1>
    </div>
  );
};

export default AdminOrders;
