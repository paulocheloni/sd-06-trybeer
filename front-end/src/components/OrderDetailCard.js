import React from 'react';
import PropTypes from 'prop-types';

const OrderDetailCard = ({ product, index }) => {
  const { quantity, name, price } = product;
  return (
    <li
      style={ { border: '2px solid black' } }
    >
      <h3 data-testid={ `${index}-product-qtd` }>
        { quantity }
      </h3>
      <h3 data-testid={ `${index}-product-name` }>
        { name }
      </h3>
      <h3 data-testid={ `${index}-product-total-value` }>
        { `R$ ${parseFloat(+price * +quantity).toFixed(2).replace('.', ',')}` }
      </h3>
    </li>
  );
};

OrderDetailCard.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderDetailCard;
