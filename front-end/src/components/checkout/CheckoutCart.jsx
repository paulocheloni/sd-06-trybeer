import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const CheckoutCart = () => {
  const { cart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPrice = totalPrice.toFixed(2).replace('.', ',');

  useEffect(() => {
    const sumItems = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setTotalPrice(sumItems);
  }, [cart]);

  return (
    <footer>
      <button
        type="button"
        data-testid="checkout-bottom-btn"
      >
        Ver Carrinho
      </button>
      <span
        data-testid="checkout-bottom-btn-value"
      >
        { `R$ ${handleTotalPrice}` }
      </span>
    </footer>
  );
};

export default CheckoutCart;
