import React from 'react';
import PropTypes from 'prop-types';

export default function CartItem(props) {
  const { index, quantity, name, price } = props;

  const handleLocalStorage = () => {
    const productLocal = JSON.parse(localStorage.getItem('cart'));
    const prodIndex = productLocal.findIndex((prod) => prod.name === name);
    productLocal.splice(prodIndex, 1);
    localStorage.setItem('cart', JSON.stringify(productLocal));
  };

  return (
    <div>
      <p data-testid={ `${index}-product-qtd-input` }>{ quantity }</p>
      <p data-testid={ `${index}-product-name` }>{ name }</p>
      <p data-testid={ `${index}-product-total-value` }>{ price * quantity }</p>
      <p data-testid={ `${index}-product-unit-price` }>{ price }</p>
      <button
        data-testid={ `${index}-removal-button` }
        type="button"
        onClick={ () => handleLocalStorage() }
      >
        X
      </button>
    </div>
  );
}

CartItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
