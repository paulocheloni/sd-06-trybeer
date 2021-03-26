import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ComponentsCSS/AddressForm.css'

const AddressForm = (props) => {
  const {
    setIsFormFilled,
    number,
    street,
    setNumber,
    setStreet,
  } = props;
  useEffect(() => {
    if (street && number) {
      setIsFormFilled(true);
    }
  }, [street, number, setIsFormFilled]);

  return (
    <form class="addresForm">
      <h3>Endereço:</h3>
      <label htmlFor="street">
        Rua:
        <input
          data-testid="checkout-street-input"
          type="text"
          name="street"
          value={ street }
          onChange={ (e) => setStreet(e.target.value) }  
        />
      </label>
      <label htmlFor="street">
        Número da casa:
        <input
          data-testid="checkout-house-number-input"
          type="text"
          name="street"
          value={ number }
          onChange={ (e) => setNumber(e.target.value) }
          class="inputAdress"
        />
      </label>
    </form>
  );
};

AddressForm.propTypes = {
  setIsFormFilled: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  setNumber: PropTypes.func.isRequired,
  setStreet: PropTypes.func.isRequired,
};

export default AddressForm;
