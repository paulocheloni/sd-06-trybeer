import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ order, orderIndex }) {
  return (
    <div data-testid={ `${orderIndex}-order-card-container` } key={ orderIndex }>
      <p data-testid={ `${orderIndex}-order-number` }>
        {order.number}
      </p>
      <p data-testid={ `${orderIndex}-order-date` }>
        {order.date}
      </p>
      <p date-testid={ `${orderIndex}-order-total-value` }>
        {order.value}
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    number: PropTypes.number.isRequired,
    date: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  orderIndex: PropTypes.number.isRequired,
};
