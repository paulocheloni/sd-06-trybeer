import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard(order, index) {
  const {
    id,
    createdAt,
    number,
    total,
  } = order;

  const day = new Date(createdAt).toLocaleDateString().getDay();
  const month = new Date(createdAt).toLocaleDateString().getMonth();
  const totalValue = `R$ ${total.replace('.', ',')}`;

  return (
    <div
      className="border rounded-md border-primary p-2 flex flex-col items-center"
      data-testid={ `${index}-order-card-container` }
    >
      <div className="flex flex-col">
        <p data-testid={ `${index}-order-total-value` }>
          <strong>{ totalValue }</strong>
        </p>
        <p data-testid={ `${index}-order-number` }>
          { number }
        </p>
        <p data-testid={ `${index}-order-date` }>
          { `${day}/${month}` }
        </p>
        <Link to={ `/orders/${id}` }>See order</Link>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
