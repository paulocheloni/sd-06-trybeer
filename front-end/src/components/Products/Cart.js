import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TrybeerContext from '../../context/TrybeerContext';

function Cart() {
  const { cart, totalCart, setTotalCart } = useContext(TrybeerContext);
  const history = useHistory();

  useEffect(() => {
    let totalValue = 0;
    cart.forEach((cartItem) => {
      totalValue += parseFloat(cartItem.price) * Number(cartItem.quantity);
    });
    setTotalCart(totalValue);
  }, [cart]);

  return (
    <button
      disabled={ cart.length > 0 }
      type="button"
      data-testid="checkout-bottom-btn"
      onClick={ () => history.push('/checkout') }
    >
      Ver Carrinho
      <span data-testid="checkout-bottom-btn-value">
        {`R$ ${totalCart.toFixed(2).replace('.', ',')}`}
      </span>
    </button>
  );
}

export default Cart;
