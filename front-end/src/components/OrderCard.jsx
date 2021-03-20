import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ orders }) {
  console.log('orders no ordersCard', orders);

  return (
    <div className="order-card-container">
      <h2>order card</h2>
      { orders.length && orders.map((order, index) => (
        <div
          key={ order.id }
          className="order-card"
          data-testid={ `${index}-order-card-container` }
        >
          <div data-testid={ `${index}-order-number` }>{order.id}</div>
          <div data-testid={ `${index}-order-date` }>{order.sale_date}</div>
          <div data-testid={ `${index}-order-total-value` }>{order.total_price}</div>
        </div>
      ))}
    </div>
  );
}

OrderCard.propTypes = {
  orders: PropTypes.arrayOf(Object).isRequired,
};
