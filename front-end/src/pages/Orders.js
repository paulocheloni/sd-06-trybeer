import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import OrdersCard from '../components/Orders/OrdersCard';
import TrybeerContext from '../context/TrybeerContext';
import TopBar from '../components/TopBar';
import getOrders from '../services/ClientOrderService';

function Orders() {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const { clientOrders, setOrders } = useContext(TrybeerContext);

  useEffect(() => {
    if (!user) return history.push('/login');

    async function fetchOrders() {
      const orders = await getOrders(user.email);
      setOrders(orders);
    }

    fetchOrders();
  }, []);

  return (
    <div>
      <TopBar title="Meus Pedidos" />
      { clientOrders.map((order, index) => (
        <Link to={ `/orders/${order.id}` } key={ index }>
          <OrdersCard
            index={ index }
            id={ order.id }
            date={ order.sale_date }
            total={ order.total_price }
          />
        </Link>
      )) }
    </div>
  );
}

export default Orders;
