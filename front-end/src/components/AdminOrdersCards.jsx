import React from 'react';
import PropTypes from 'prop-types';

function AdminOrdersCards({ element, index }) {
  const {
    id,
    total_price: totalPrice,
    status,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
  } = element;

  const statusConvert = () => {
    switch (status) {
    case 'PENDING': return 'Pendente';
    case 'DELIVERED': return 'Entregue';
    default: return '';
    }
  };

  return (
    <div className="orderCards">
      <h4 data-testid={ `${index}-order-number` }>
        { `Pedido ${id}` }
      </h4>
      <p data-testid={ `${index}-order-address` }>
        { `${deliveryAddress}, ${deliveryNumber}` }
      </p>
      <h4 data-testid={ `${index}-order-total-value` }>
        { `R$ ${totalPrice.replace('.', ',')}` }
      </h4>
      <h3 data-testid={ `${index}-order-status` }>
        { `${statusConvert()}` }
      </h3>
    </div>
  );
}

AdminOrdersCards.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
    total_price: PropTypes.number,
  }).isRequired,
};

export default AdminOrdersCards;
