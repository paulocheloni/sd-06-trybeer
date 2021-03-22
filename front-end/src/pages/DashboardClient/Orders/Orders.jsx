import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { userOrders } from '../../../services/Users';
import { verifyUser } from '../../../store/LocalStorage/actions';
import { parseCartPrice, correctDate } from '../../../utils/parseValues';
import './Orders.css';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      const { email } = verifyUser(history);
      const allOrders = await userOrders(email);
      setOrders(allOrders);
      console.log(allOrders);
    };
    fetchOrders();
  }, [history]);

  return (
    <div>
      <Header title="Meus Pedidos" user="client" />
      <div>
        {orders.map((order, index) => (
          <div
            key={ index }
            data-testid={ `${index}-order-card-container` }
            onClick={ () => history.push(`/orders/${order.id}`) }
            className="orders"
          >
            <h3 data-testid={ `${index}-order-number` }>{`Pedido ${order.id}`}</h3>
            <h4
              data-testid={ `${index}-order-date` }
              className="date-order"
            >
              {correctDate(order.sale_date)}
            </h4>
            <h4 data-testid={ `${index}-order-total-value` }>
              {parseCartPrice(order.total_price)}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
