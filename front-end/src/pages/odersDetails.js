import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router';
import NavBar from '../components/menuNavBar';
import api from '../services/api';

function OrderDetails() {
  const [order, setOrder] = useState([]);
  const{ id } = useParams();

  useEffect(() => {
    api.orderDetails(id)
    .then((response) => {
      console.log(response.data)
      setOrder(response.data)
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar data-testid="top-title" content="Detalhes do Pedido" />
      <h1 data-testid="order-number">{`Pedido ${id}`}</h1>
      <h2 data-testid="order-date">{moment(order.saleDate).format('DD/MM')}</h2>
      {order.map((product, index) => {
        return (
          <div key={index}>
            <h3 data-testid={`${index}-product-name`}>{product.name}</h3>
            <h4 data-testid={`${index}-product-qtd`}>{product.productQty}</h4>
            <h3 data-testid={`${index}-product-value`}>{`R$ ${product.totalPrice}`.replace('.', ',')}</h3>
          </div>
        )
      })}
      <h3 data-testid="order-total-value">
      Total: R$ {order.reduce((acc, value) => {
        console.log(acc)
        return (
          acc + value.totalPrice
        )}, 0).toFixed(2).replace('.', ',')
      }
      </h3>
    </div>
  );
}

export default OrderDetails;
