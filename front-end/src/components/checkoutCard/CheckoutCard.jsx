import React from 'react';
import PropTypes from 'prop-types';

const deleteProduct = (product, changeState) => {
  const storage = JSON.parse(localStorage.getItem('cart'));
  const myItem = storage.find((item) => item.id === product.id);
  storage.splice(storage.findIndex((item) => item.id === myItem.id), 1);
  localStorage.setItem('cart', JSON.stringify(storage));

  changeState(JSON.parse(localStorage.getItem('cart')));
  return product;
};

const CheckoutCard = ({ product, changeState, specialNumber }) => {
  const { quantity, name, price } = product;
  return (
    <div>
      <span data-testid={ `${specialNumber}-product-qtd-input` }>{quantity}</span>
      <span data-testid={ `${specialNumber}-product-name` }>
        -
        {name}
      </span>
      <span data-testid={ `${specialNumber}-product-total-value` }>
        { (price * quantity).toFixed(2) }
      </span>
      <span data-testid={ `${specialNumber}-product-unit-price` }>
        (
        {price}
        un
        )
      </span>
      <button
        data-testid={ `${specialNumber}-removal-button` }
        type="button"
        onClick={ () => deleteProduct(product, changeState) }
      >
        EXCLUIR
      </button>
    </div>
  );
};

CheckoutCard.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  changeState: PropTypes.func.isRequired,
  specialNumber: PropTypes.number.isRequired,
};

export default CheckoutCard;
