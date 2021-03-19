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
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user, user.token)
        const response = await clientOrders.getAll(user.token);
        console.log(response)
        setOrders(response.orders);
      } catch (err) {
        console.log(err.message)
        history.push('/login');
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <MenuTop title="TryBeer" />
      <h1 data-testid="top-title">Meus Pedidos</h1>
      <Orderslist orders={ orders } />
    </div>
  );
}

export default Orders;
