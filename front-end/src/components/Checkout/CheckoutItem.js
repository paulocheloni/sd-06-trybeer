import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import removeCheckoutItem from '../../services/checkoutService';
import TrybeerContext from '../../context/TrybeerContext';

function CheckoutItem({ name, price, quantity, index }) {
  const { cart, setCart } = useContext(TrybeerContext);
  const totalPrice = parseFloat(price) * Number(quantity);

  return (
    <div>
      <div
        data-testid={ `${index}-product-qtd-input` }
      >
        { quantity }
      </div>
      <div
        data-testid={ `${index}-product-name` }
      >
        { name }
      </div>
      <div
        data-testid={ `${index}-product-total-value` }
      >
        {`R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
      </div>
      <div
        data-testid={ `${index}-product-unit-price` }
      >
        { `(R$ ${price.replace('.', ',')} un)` }
      </div>
      <button
        type="button"
        data-testid={ `${index}-removal-button` }
        onClick={ () => removeCheckoutItem(name, cart, setCart) }
      >
        X
      </button>
    </div>
  );
}

CheckoutItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutItem;
