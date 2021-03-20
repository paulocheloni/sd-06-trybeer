import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import productsContext from '../context/productsContext';

export default function OrderCard() {
  const { orders } = useContext(productsContext);

  const formatDate = (date) => {
    console.log(date);
    const day = date.getDate();
    const month = Number(date.getMonth()) + 1;
    return `${day}/${month}`;
  };

  return (
    <div className="order-card-container">
      { orders.length && orders.map((order, index) => (
        <Link key={ order.id } to={ `/orders/${order.id}` }>
          <div
            className="order-card"
            data-testid={ `${index}-order-card-container` }
          >
            <div data-testid={ `${index}-order-number` }>{order.id}</div>
            <div
              data-testid={ `${index}-order-date` }
            >
              { formatDate(new Date(order.sale_date)) }
            </div>
            <div data-testid={ `${index}-order-total-value` }>{order.total_price}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
