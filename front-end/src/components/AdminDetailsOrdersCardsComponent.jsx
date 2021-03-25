import React from 'react';
import PropTypes from 'prop-types';

function AdminDetailsOrdersCardsComponent({ element, index }) {
  const commaAmount = (price) => `${price}`.replace('.', ',');
  const { productPrice, quantity, name, price } = element;
  return (
    <>
      <p data-testid={ `${index}-product-qtd` }>{ quantity }</p>
      <p data-testid={ `${index}-product-name` }>{ name }</p>
      <p data-testid={ `${index}-product-total-value` }>
        { `R$ ${commaAmount(productPrice)}` }
      </p>
      <p data-testid={ `${index}-order-unit-price` }>{ `(R$ ${commaAmount(price)})` }</p>
    </>
  );
}

AdminDetailsOrdersCardsComponent.propTypes = {
  element: PropTypes.shape({
    quantity: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    productPrice: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default AdminDetailsOrdersCardsComponent;
