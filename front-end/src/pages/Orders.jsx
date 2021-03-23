import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
// import { OrderCard } from '../components/index';
import { getOrdersByUser } from '../services/orders';

function Orders() {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    getOrdersByUser().then((json) => setOrders(json.orders));
  }, []);

  console.log(orders);
  return (
    <div>
      <TopBar name="Meus Pedidos" />

    </div>
  );
}

export default Orders;
