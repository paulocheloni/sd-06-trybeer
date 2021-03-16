import React from 'react';

const Checkbox = ({ isSeller, setIsSeller }) => (
  <label htmlFor="check">
    Quero vender
    <input
      type="checkbox"
      data-testid="signup-seller"
      checked={ isSeller }
      onClick={ () => setIsSeller(!isSeller) }
      id="check"
    />
  </label>
);

export default Checkbox;
