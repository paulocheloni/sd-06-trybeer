import React, {useContext } from 'react';
import TrybeerContext from '../../context/TrybeerContext';

function Address() {
  const { address, setAddress } = useContext(TrybeerContext);
  return (
    <form>
      Endereço
      <label
        htmlFor="checkout-street-input"
      >
        Rua
        <input
          data-testid="checkout-street-input"
          type="text"
        />
      </label>
      <label
        htmlFor="checkout-house-number-input"
      >
        Número da casa:
        <input
          data-testid="checkout-house-number-input"
          type="text"
        />
      </label>
    </form>
  );
}

export default Address;
