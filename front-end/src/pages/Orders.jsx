import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuTop from '../components/menuTop';
import clientOrders from '../methods/clientOrders';
import Orderslist from '../components/OrdersList';

function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await clientOrders.getAll();
        setOrders(response);
      } catch (err) {
        history.push('/login');
      }
    };
    fetchProducts();
  }, [history, orders]);

  return (
    <div>
      <MenuTop />
      <h1 data-testid="top-title">Meus Pedidos</h1>
      <Orderslist orders={ orders } />
    </div>
  );
}

export default Orders;
