import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useHistory, useParams } from 'react-router';

import NavBar from '../components/menuNavBar';
import api from '../services/api';
import { loadState } from '../services/localStorage';

function OrderDetails() {
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
  }, [history]);

  useEffect(() => {
    api.orderDetails(id)
      .then((response) => {
        console.log(response.data);
        setOrder(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <NavBar data-testid="top-title" content="Detalhes do Pedido" />
      <h1 data-testid="order-number">{`Pedido ${id}`}</h1>
      <h2 data-testid="order-date">{moment(order.saleDate).format('DD/MM')}</h2>
      {order.map((product, index) => (
        <div key={ index }>
          <h3 data-testid={ `${index}-product-name` }>{product.name}</h3>
          <h4 data-testid={ `${index}-product-qtd` }>{product.productQty}</h4>
          <h3 data-testid={ `${index}-product-total-value` }>
            R$
            {(product.totalPrice).toFixed(2).toString().replace('.', ',')}
          </h3>
        </div>
      ))}
      <h3 data-testid="order-total-value">
        Total: R$
        {' '}
        {order.reduce((acc, value) => {
          console.log(acc);
          return (
            acc + value.totalPrice
          );
        }, 0).toFixed(2).replace('.', ',')}
      </h3>
    </div>
  );
}

export default OrderDetails;
