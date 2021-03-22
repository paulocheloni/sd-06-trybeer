import React from 'react';
import PropTypes from 'prop-types';

function CardAdmin(props) {
  const { pedido: {
    id,
    deliveryAddress,
    deliveryNumber,
    status,
    totalPrice,
  }, IndexId } = props;
  return (
    <div
      className="flex flex-wrap border-2
      border-gray-800 w-96 h-64 m-5"
    >
      <div className="flex-col">
        <div
          data-testid={ `${IndexId}-order-number` }
          className="text-2xl"
        >
          Pedido
          {' '}
          {id}
        </div>
        <div
          data-testid={ `${IndexId}-order-address` }
        >
          {deliveryAddress}
          {', '}
          {deliveryNumber}
        </div>
        <div
          className="mt-10"
          data-testid={ `${IndexId}-order-total-value` }
        >
          {totalPrice}
        </div>
      </div>
      <div className="flex-auto">
        <div
          data-testid={ `${IndexId}-order-status` }
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
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
  IndexId: PropTypes.string.isRequired,
};

export default CardAdmin;
