import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ order, index }) {
  const {
    id,
    createdAt,
    total,
    number,
    address,
    status,
  } = order;

  const user = JSON.parse(localStorage.getItem('user'));
  const { role } = user;
  const path = role === 'administrator' ? `/admin/orders/${id}` : `/orders/${id}`;
  const totalValue = `R$ ${total.replace('.', ',')}`;
  let date = new Date(createdAt).toLocaleDateString();
  date = date.split('/');
  date = `${date[0]}/${date[1]}`;

  return (
    <div
      className="border rounded-md border-primary p-2 flex flex-col items-center"
      data-testid={ `${index}-order-card-container` }
    >
      <Link to={ path }>
        <div className="flex flex-col">

          <p data-testid={ `${index}-order-number` }>
            { `Pedido ${index + 1}` }
          </p>
          <p data-testid={ `${index}-order-total-value` }>
            <strong>{ totalValue }</strong>
          </p>
          <p data-testid={ `${index}-order-date` }>
            { date }
          </p>
          <p data-testid={ `${index}-order-address` }>
            { `${address}, ${number}` }
          </p>
          <p data-testid={ `${index}-order-status` }>
            { status === 'pending' ? 'Pendente' : 'Entregue' }
          </p>
        </div>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
