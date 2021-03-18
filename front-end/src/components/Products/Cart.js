import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrybeerContext from '../../context/TrybeerContext';

function Checkout() {
  const { cart, totalCart, setTotalCart } = useContext(TrybeerContext);

  useEffect(() => {
    let totalValue = 0;
    cart.forEach((cartItem) => {
      totalValue += parseFloat(cartItem.price) * parseInt(cartItem.quantity); 
    });
    setTotalCart(totalValue);
  }, [cart]);
  return (
    <Link to="/checkout">
      <span>Ver Carrinho</span>
      <div>R$ { totalCart.toFixed(2) }</div>
    </Link>
  );

}

export default Checkout;
