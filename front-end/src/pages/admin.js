import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import NavBarAdmin from '../components/menuNavBarAdmin';
import api from '../services/api';
import { loadState } from '../services/localStorage';

function Admin() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'client') return history.push('/products');
  }, [history]);

  useEffect(() => {
    api.listAllOrdersAdmin()
      .then((response) => setOrders(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBarAdmin content="Trybeer" />
      <h1>Pedidos</h1>
      {orders.map((order, index) => (
        <Link to={ `/admin/orders/${order.id}` } key={ index }>
          <div>
            <h3 data-testid={`${order.id}-order-number`}>
              Pedido {order.id}
            </h3>
            <h4 data-testid={`${order.id}-order-address`}>{order.delivery_address}</h4>
            <h4 data-testid={`${order.id}-order-number`}>{order.delivery_number}</h4>
            <h3>{order.total_price}</h3>
            <h3>{order.status}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Admin;
