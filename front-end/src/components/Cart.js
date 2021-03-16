import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TrybeerContext from '../context/TrybeerContext';

const Cart = () => {
  const { cart } = useContext(TrybeerContext);
  const history = useHistory();

  const totalCart = () => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart'));
    if (localStorageCart) {
      const parsedCart = parseFloat(localStorageCart).toFixed(2);
      return JSON.stringify(`R$ ${parsedCart}`).replace('.', ',');
    }
    return null;
  };

  const disabledButton = totalCart() === null || totalCart() === 0;

  useEffect(() => {
    totalCart();
  }, [cart]);

  return (
    <div>
      <button
        data-testid="checkout-bottom-btn"
        type="button"
        onClick={ () => history.push('/checkout') }
        disabled={ disabledButton }
      >
        Ver Carrinho
      </button>
      <p data-testid="checkout-bottom-btn-value">
        { totalCart() ? totalCart() : 'R$ 0,00' }
      </p>
    </div>
  );
};

export default Cart;
