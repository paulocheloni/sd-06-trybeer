import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import productsContext from '../context/productsContext';

export default function OrderCard() {
  const { orders } = useContext(productsContext);

  return (
    <div className="order-card-container">
      { orders.length && orders.map((order, index) => (
        <Link key={ order.id } to={ `/orders/${order.id}` }>
          <div
            className="order-card"
            data-testid={ `${index}-order-card-container` }
          >
            <div data-testid={ `${index}-order-number` }>{order.id}</div>
            <div data-testid={ `${index}-order-date` }>{order.sale_date}</div>
            <div data-testid={ `${index}-order-total-value` }>{order.total_price}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
