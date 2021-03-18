import React from 'react';
import PropTypes from 'prop-types';

function CardAdmin(props) {
  const { pedido: { id, address, status, price } } = props;
  return (
    <div
      className="flex flex-wrap border-2
      border-gray-800 w-96 h-64 m-5"
    >
      <div className="flex-col">
        <div
          data-testid={ `${id}-order-number` }
          className="text-2xl"
        >
          Pedido
          {' '}
          {id}
        </div>
        <div
          data-testid={ `${id}-order-address` }
        >
          {address}
        </div>
        <div
          className="mt-10"
          data-testid={ `${id}-order-total-value` }
        >
          {price}
        </div>
      </div>
      <div className="flex-auto">
        <div
          data-testid={ `${id}-order-status` }
        >
          {status}
        </div>
      </div>
    </div>
  );
}

CardAdmin.propTypes = {
  pedido: PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardAdmin;
