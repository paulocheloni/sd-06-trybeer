import React from 'react';
import PropTypes from 'prop-types';

const CartButton = ({ cart, disabled, id, callback }) => {
  const cartTotal = Object.keys(cart).reduce(
    (sum, curr) => (
      sum + (cart[curr].price * cart[curr].quantity)
    ), 0,
  ).toFixed(2).replace('.', ',');

  const testId = (id === 'cart') ? 'checkout-bottom-btn' : 'checkout-finish-btn';
  const label = (id === 'cart') ? 'Ver Carrinho' : 'Finalizar Pedido';

  return (
    <button
      type="button"
      onClick={ callback }
      disabled={ disabled }
      data-testid={ testId }
    >
      <span>
        { label }
      </span>
      <span data-testid="checkout-bottom-btn-value">
        { `R$ ${cartTotal}` }
      </span>
    </button>
  );
};

export default CartButton;

CartButton.propTypes = {
  cart: PropTypes.objectOf(PropTypes.any).isRequired,
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  callback: PropTypes.func,
};

CartButton.defaultProps = {
  callback: () => {},
};
