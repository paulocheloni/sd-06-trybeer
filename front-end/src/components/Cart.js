import React, { useContext, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import TrybeerContext from '../context/TrybeerContext';

const Cart = () => {
  const { cart, getTotalPriceCart } = useContext(TrybeerContext);
  const history = useHistory();

  const disabledButton = getTotalPriceCart() === null || getTotalPriceCart() === 0;

  useEffect(() => {
    getTotalPriceCart();
  }, [cart, getTotalPriceCart]);

  return (
    <div className="cart-container">
      <p data-testid="checkout-bottom-btn-value">
        { `R$ ${getTotalPriceCart().toString().replace('.', ',')}` }
      </p>
      <button
        data-testid="checkout-bottom-btn"
        type="button"
        onClick={ () => history.push('/checkout') }
        disabled={ disabledButton }
      >
        Ver Carrinho
      </button>
    </div>
  );
};

export default Cart;
