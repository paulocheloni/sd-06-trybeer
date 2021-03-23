import React from 'react';

function FormsCheckout(props) {
  const { setEndereco } = props;
  const { endereco } = props;
  return (
    <div>
      <span>Rua:</span>
      <input
        data-testid="checkout-street-input"
        type="text"
        onChange={ (event) => setEndereco({ rua: event.target.value, numCasa: endereco.numCasa})}
      ></input>
      <span>Número da Casa:</span>
      <input
        data-testid="checkout-house-number-input"
        onChange={ (event) => setEndereco({ rua: endereco.rua, numCasa: event.target.value})}
      ></input>
    </div>
  );
}

export default FormsCheckout;
