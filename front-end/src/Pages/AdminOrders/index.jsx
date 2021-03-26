import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import MenuAdmin from '../../Components/MenuAdmin';
import CardOrdersAdmin from '../../Components/CardOrdersAdmin';
import AppContext from '../../context/AppContext';

const AdminOrders = () => {
  const history = useHistory();
  const { setEmail, setPassword } = useContext(AppContext);

  useEffect(() => {
    setEmail('');
    setPassword('');
    if (!window.localStorage.token) {
      history.push('/login');
    }
  }, []);

  return (
    <div>
      <MenuAdmin><p data-testid="top-title">Admin Pedido</p></MenuAdmin>
      <h1>Pedidos</h1>
      <CardOrdersAdmin />
    </div>
  );
};

export default AdminOrders;
