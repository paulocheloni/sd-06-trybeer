import React, { useContext } from 'react';
import TrybeerContext from '../../context/TrybeerContext';
import handleAddressInput from '../../services/addressService';

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
          id="rua"
          data-testid="checkout-street-input"
          type="text"
          onChange={ () => handleAddressInput(address, setAddress) }
        />
      </label>
      <label
        htmlFor="checkout-house-number-input"
      >
        Número da casa:
        <input
          id="numero"
          data-testid="checkout-house-number-input"
          type="text"
          onChange={ () => handleAddressInput(address, setAddress) }
        />
      </label>
    </form>
  );
}

export default Address;
