// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Menu from '../../Components/Menu';
import * as S from './style';

const Orders = () => {
  const history = useHistory();
  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    }
  });
  const [orders, setOrders] = useState([]);
  // fetchApi = async () => {
  // const auth = JSON.parse(localStorage.token);
  // const body = { auth };
  // const response = await axios.post('http://localhost:3001/orders', body);
  try {
    // const retrievedOrders = await response.orders;
    const retrievedOrders = [
      {
        date: '19/03',
        value: 25.30,
        id: 1,
      },
      {
        date: '19/03',
        value: 35.99,
        id: 2,
      },
    ];
    if (orders.length === 0) {
      setOrders(retrievedOrders);
    }
  } catch (err) {
    alert('Seus pedidos inexistentes ou inacessíveis');
  }

  return (
    <>
      <Menu><p data-testid="top-title">Meus Pedidos</p></Menu>
      <S.Container>
        {orders.length < 1 ? <div>No orders</div> : orders.map((order, index) => (
          <S.Item key={ index }>
            <span data-testid={ `${index}-order-card-container` }>
              <div data-testid={ `${index}-order-number` }>
                Pedido
                {' '}
                { index + 1 }
              </div>
              <div data-testid={ `${index}-order-date` }>{ order.date }</div>
              <div data-testid={ `${index}-order-total-value` }>
                R$
                { order.value }
              </div>
            </span>
          </S.Item>
        ))}
        <div />
      </S.Container>
    </>
  );
};

export default Orders;
