import React, { useContext, useEffect } from 'react';
import OrdersCard from '../components/Orders/OrdersCard';
import TrybeerContext from '../context/TrybeerContext';
import TopBar from '../components/TopBar';
import { getOrders } from '../services/ClientOrderService';
import { Link } from 'react-router-dom';

function Orders() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  const { clientOrders, setOrders } = useContext(TrybeerContext);

  useEffect(() => {
    async function fetchOrders() {
      const orders = await getOrders(email);
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
