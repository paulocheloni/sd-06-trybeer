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

  return (
    <div
      className="border rounded-md border-primary p-2 flex flex-col items-center"
      data-testid={ `${index}-order-card-container` }
    >
      <div className="flex flex-col">
        <p data-testid={ `${index}-order-total-value` }>
          <strong>{ `R$ ${total.replace('.', ',')}` }</strong>
        </p>
        <p data-testid={ `${index}-order-number` }>
          { number }
        </p>
        <p data-testid={ `${index}-order-date` }>
          { `${new Date(createdAt).getDay()}/${new Date(createdAt).getMonth()}` }
        </p>
        <Link
          to={ `/orders/${id}` }
        >
          Ver pedido
        </Link>
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
