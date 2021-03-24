import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ order, index }) {
  const {
    id,
    createdAt,
    total,
  } = order;

  const totalValue = `R$ ${total.replace('.', ',')}`;
  let date = new Date(createdAt).toLocaleDateString();
  date = date.split('/');
  date = `${date[0]}/${date[1]}`;
  const user = JSON.parse(localStorage.getItem('user'));
  const role = user ? user.role : 'client';
  const pre = role === 'client' ? '' : '/admin';

  return (
    <div
      className="border rounded-md border-primary p-2 flex flex-col items-center"
      data-testid={ `${index}-order-card-container` }
    >
      <div className="flex flex-col">
        <p data-testid={ `${index}-order-total-value` }>
          <strong>{ totalValue }</strong>
        </p>
        <Link
          data-testid={ `${index}-order-number` }
          to={ `/orders/${id}` }
        >
          <span className="hidden">{ `Pedido ${index + 1}` }</span>
          <span>{ `Order N. ${index + 1}` }</span>
        </Link>
        <p data-testid={ `${index}-order-date` }>
          { date }
        </p>
        <Link to={ `${pre}/orders/${id}` }>See order</Link>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
