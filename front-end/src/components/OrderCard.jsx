import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ order, orderIndex }) {
  return (
    <div data-testid={ `${orderIndex}-order-card-container` } key={ `${orderIndex}` }>
      <p data-testid={ `${orderIndex}-order-number` }>
        Nº: {order.delivery_number}
      </p>
      <p data-testid={ `${orderIndex}-order-date` }>
        data: {order.sale_date}
      </p>
      <p data-testid={ `${orderIndex}-order-total-value` }>
        valor total: {order.total_price}
      </p>
      <hr></hr>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    delivery_number: PropTypes.string.isRequired,
    date: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  orderIndex: PropTypes.number.isRequired,
};
