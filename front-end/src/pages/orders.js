import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import moment from 'moment';
import { Link } from 'react-router-dom';
import NavBar from '../components/menuNavBar';
import { loadState } from '../services/localStorage';
import api from '../services/api';

function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const user = loadState('user');
    api.listAllOrders(user.email)
      .then((response) => setOrders(response.data))
      .catch((err) => console.log(err));
  }, [history]);

  return (
    <div>
      <NavBar content="Meus Pedidos" />
      <h1 data-testid="top-title">Meus Pedidos</h1>
      {orders.map((order, index) => (
        <Link to={ `/orders/${order.id}` } key={ index }>
          <div>
            <h2 data-testid={ `${index}-order-number` }>
              Pedido
              {' '}
              {order.id}
            </h2>
            <h3 data-testid={ `${index}-order-date` }>
              {moment(order.sale_date).format('DD/MM')}
            </h3>
            <h3 data-testid={ `${index}-order-total-value` }>
              R$
              {' '}
              {(order.total_price).replace('.', ',')}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Orders;
