import React from 'react';
import PropTypes from 'prop-types';

function CostumerOrdersDetailsCard({ element, index }) {
  const { name, quantity, productPrice } = element;

  const commaAmount = (price) => `${price}`.replace('.', ',');

  return (
    <>
      <p data-testid={ `${index}-product-qtd` }>{ quantity }</p>
      <p data-testid={ `${index}-product-name"` }>{ name }</p>
      <p
        data-testid={ `${index}-product-total-value` }
      >
        { `R$ ${commaAmount(productPrice)}` }
      </p>
    </>
  );
}

CostumerOrdersDetailsCard.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.string,
    productPrice: PropTypes.string,
  }).isRequired,
};

export default CostumerOrdersDetailsCard;