import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContextBeer from '../context/ContextBeer';

function CartButton() {
  const {
    sale,
  } = useContext(ContextBeer);
  const [localTotal, setLocalTotal] = useState(0);

  useEffect(() => setLocalTotal(sale.total), [sale]);

  return (
    <div
      className="flex items-center justify-center fixed left-1/2 bg-green-700
      rounded-md bottom-12 w-48 h-20"
    >
      <Link to="/checkout">
        <button
          type="button"
          data-testid="checkout-bottom-btn"
        >
          <h1>Ver carrinho</h1>
          <span data-testid="checkout-bottom-btn-value">
            { `R$ ${localTotal.toFixed(2)}` }
          </span>
        </button>
      </Link>
    </div>
  );
}

export default CartButton;
