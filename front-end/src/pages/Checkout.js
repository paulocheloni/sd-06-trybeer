import React, { useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';

function Checkout() {
  const { getFromLocalStorage } = useContext(TrybeerContext);
  const recoveredCart = getFromLocalStorage('cart');
  console.log(recoveredCart)
  return (
    <div>
      Checkout!!
    </div>
  );
}

export default Checkout;
