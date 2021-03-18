import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TrybeerContext from '../../context/TrybeerContext';

function Checkout() {
  const { cart } = useContext(TrybeerContext);
  return (
    <Link to="/checkout">
      <span>Ver Carrinho</span>
      <div>R$</div>
    </Link>
  );

}

export default Checkout;
