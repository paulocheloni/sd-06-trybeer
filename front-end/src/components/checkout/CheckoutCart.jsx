import React, { useState } from 'react';

const CheckoutCart = () => {
  const [totalPrice] = useState(0);
  const handleTotalPrice = totalPrice.toFixed(2).replace('.', ',');

  return (
    <footer>
      <button
        type="button"
        data-testid="checkout-bottom-btn"
      >
        Ver Carrinho
      </button>
      <span
        data-testid="checkout-bottom-btn-value"
      >
        { `R$ ${handleTotalPrice}` }
      </span>
    </footer>
  );
};

export default CheckoutCart;
