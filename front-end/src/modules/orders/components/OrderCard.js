import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard(order, index) {

  const user = JSON.parse(localStorage.getItem('user'));
  const { role } = user;
  
  const {
    id,
    total,
    number,
    address,
    createdAt,
    status,
  } = order;

  const path = role === 'administrator' ? `/admin/orders/${id}` : `/orders/${id}`;

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
            <strong>{ `R$ ${total.replace('.', ',')}` }</strong>
          </p>
          <p data-testid={ `${index}-order-date` }>
            { `${new Date(createdAt).getDay()}/${new Date(createdAt).getMonth()}` }
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
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    delivery_address: PropTypes.string.isRequired,
    delivery_number: PropTypes.string.isRequired,
    total_price: PropTypes.number.isRequired,
    sale_date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
