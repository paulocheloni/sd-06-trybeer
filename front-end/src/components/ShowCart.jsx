import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/index';
import { getItensStorage, calculateTotal } from '../services/index';

function ShowCart() {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(false);
  const [items, setItems] = useState(getItensStorage());

  useEffect(() => {
    getProducts(setProducts);
    console.log(items);
  }, [items]);

  useEffect(() => {
  }, [products]);

  return (
    <div>
      <Link to="/orders/:id">
        <button
          data-testid="checkout-bottom-btn-value"
          type="button"
        >
          Ver carrinho R$
          { products && total}
        </button>
      </Link>
      <button onClick={ () => calculateTotal(items, products) }>calculo</button>
    </div>
  );
}

export default ShowCart;
