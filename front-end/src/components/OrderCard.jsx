import React from 'react';

function OrderCard({ order, orderIndex }) {
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
    date: PropTypes.date.isRequired,
    value: PropTypes.value.string,
  }).isRequired,
  orderIndex: PropTypes.number.isRequired,
};
