import React from 'react';
import PropTypes from 'prop-types';

function AdminOrdersCards({ element, index }) {
  // const { id, total_price: totalPrice, status } = element;

  return (
    <div className="orderCards">
      <h4 data-testid={ `${index}-order-number` }>
        {/* { `Pedido ${ id }` } */}
      </h4>
      <p data-testid={ `${index}-order-address` }>
        {/* {` ${ address }`  } */}
      </p>
      <h4 data-testid={ `${index}-order-total-value` }>
        {/* { ` R$ ${ totalPrice.replace('.', ',') }` } */}
      </h4>
      <h3 data-testid={ `${index}-order-status` }>
        {/* { `${ status }` } */}
      </h3>
    </div>
  );
}

AdminOrdersCards.propTypes = {
  index: PropTypes.number.isRequired,
};

export default AdminOrdersCards;