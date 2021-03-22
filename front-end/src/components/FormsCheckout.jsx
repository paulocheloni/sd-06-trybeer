import React from 'react';

function FormsCheckout() {
  return (
    <div>
      <span>Rua:</span>
      <input data-testid="checkout-street-input" type="text"></input>
      <span>Número da Casa:</span>
      <input data-testid="checkout-house-number-input" type="number"></input>
    </div>
  );
}

export default FormsCheckout;
