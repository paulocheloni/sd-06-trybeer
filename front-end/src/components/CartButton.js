import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartButton = ({ cart }) => {
  const cartTotal = Object.keys(cart).reduce((sum, curr) => (
    sum + (cart[curr].price * cart[curr].quantity)
  ), 0);

  const history = useHistory();

  const disabled = (Object.keys(cart).length === 0);

  const goCheckout = () => {
    history.push('/checkout');
  };

  return (
    <button
      type="button"
      onClick={ goCheckout }
      disabled={ disabled }
      data-testid="checkout-bottom-btn"
    >
      <span>
        Ver Carrinho
      </span>
      <span data-testid="checkout-bottom-btn-value">
        { `R$ ${cartTotal.toFixed(2).replace('.', ',')}` }
      </span>
    </button>
  );
};

export default CartButton;

CartButton.propTypes = {
  cart: PropTypes.objectOf(PropTypes.any).isRequired,
};
