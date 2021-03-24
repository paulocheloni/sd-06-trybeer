import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextBeer from '../context/ContextBeer';

function CartButton() {
  const history = useHistory();
  const {
    total,
    stringTotal,
  } = useContext(ContextBeer);

  console.log('total number: ', total);
  console.log('total string: ', stringTotal);

  const onClick = () => {
    history.push('/checkout');
  };

  return (
    <button
      className="flex items-center justify-center fixed left-1/2 bg-green-700
      rounded-md bottom-12 w-48 h-20"
      type="button"
      data-testid="checkout-bottom-btn"
      onClick={ () => onClick() }
      disabled={ stringTotal === 'R$ 0,00' }
    >
      <h1>Ver Carrinho</h1>
      <span data-testid="checkout-bottom-btn-value">
        { stringTotal }
      </span>
    </button>
  );
}

export default CartButton;
