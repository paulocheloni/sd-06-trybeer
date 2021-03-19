import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContextBeer from '../context/ContextBeer';

function CartButton() {
  const history = useHistory();
  const noProduct = 0;
  const {
    sale,
  } = useContext(ContextBeer);
  const [localTotal, setLocalTotal] = useState(sale.total);

  useEffect(() => setLocalTotal(sale.total), [sale]);

  const onClick = () => {
    history.push('/checkout');
  };

  return (
    <div
      className="flex items-center justify-center fixed left-1/2 bg-green-700
      rounded-md bottom-12 w-48 h-20"
    >
      <button
        type="button"
        data-testid="checkout-bottom-btn"
        onClick={ () => onClick() }
        disabled={ localTotal === noProduct }
      >
        <h1>Ver Carrinho</h1>
        <span data-testid="checkout-bottom-btn-value">
          { `R$ ${localTotal.replace('.', ',')}` }
        </span>
      </button>
    </div>
  );
}

export default CartButton;
