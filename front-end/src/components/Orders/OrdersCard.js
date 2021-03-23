import React from 'react';
import moment from 'moment';

function OrdersCard({ index, id, date, total }) {
  return (
    <div data-testid={ `${index}-order-card-container` }>
      <h2 data-testid={ `${index}-order-number` }>{`Pedido ${id}`}</h2>
      <h3 data-testid={ `${index}-order-date` }>{moment(date).format('DD/MM')}</h3>
      <h3 data-testid={ `${index}-order-total-value` }>{ `R$ ${total.replace('.', ',')}` }</h3>
    </div>
  );
}

export default OrdersCard;
