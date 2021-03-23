import React from 'react';

function FormsCheckout(props) {
  const { setAddress, address } = props;
  
  return (
    <div>
      <span>Rua:</span>
      <input
        data-testid="checkout-street-input"
        type="text"
        onChange={ (event) => setAddress({ address: event.target.value, number: address.number})}
      ></input>
      <span>Número da Casa:</span>
      <input
        data-testid="checkout-house-number-input"
        onChange={ (event) => setAddress({ address: address.address, number: event.target.value})}
      ></input>
    </div>
  );
}

export default FormsCheckout;
