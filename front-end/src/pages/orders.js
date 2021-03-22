import React, {useEffect, useState} from 'react';
import NavBar from '../components/menuNavBar';
import { useHistory } from 'react-router';
import { loadState } from '../services/localStorage';
import api from '../services/api';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const user = loadState('user');

    api.listAllOrders(user.email)
    .then((response) => {
      console.log(response.data)

      setOrders(response.data)
    })
    .catch((err) => console.log(err));

    setEmail(user.email);
  }, []);

  return (
    <div>
      <NavBar content="Meus Pedidos" />
      <h1 data-testid="top-title">Meus Pedidos</h1>
      {orders.map((order, index) => {
        return (
          <Link to={`/orders/${order.id}`} key={index}>
              <div>
              <h2 data-testid="order-number">{order.id}</h2>
              <h3 data-testid="order-date">{moment(order.sale_date).format('DD/MM')}</h3>
              <h3 data-testid={`order-total-value`}>{order.total_price}</h3>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default Orders;