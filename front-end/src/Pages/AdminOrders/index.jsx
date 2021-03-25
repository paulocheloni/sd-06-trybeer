import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Menu from '../../Components/Menu';
import CardOrders from '../../Components/cardOrdersAdmin';

const AdminOrders = () => {
  const history = useHistory();

  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    }
  });

  return (
    <div>
      <Menu><p data-testid="top-title">Admin Pedido</p></Menu>
      <CardOrders />
    </div>
  );
};

export default AdminOrders;
