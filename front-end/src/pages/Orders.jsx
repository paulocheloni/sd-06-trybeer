import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { OrderCard } from '../components/index';
import { getOrdersByUser } from '../services/orders';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByUser().then((json) => setOrders(json));
  }, []);

  const history = useHistory();

  console.log(orders);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');
  }, [history]);

  return !orders ? <h1>Loading...</h1> : (
    <div>
      <TopBar name="Meus Pedidos" />
      <br />
      <br />
      <br />
      <br />
      <br />
      {orders.map((order, index) => (<OrderCard
        key={ order.id }
        orderInfo={ order }
        index={ index }
        data-testid={ `${index}-order-card-container` }
      />))}
    </div>
  );
}

export default Orders;
