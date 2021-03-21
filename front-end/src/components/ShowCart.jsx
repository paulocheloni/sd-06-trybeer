import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getProducts } from '../api/index';
// import { getItensStorage, calculateTotal } from '../services/index';

function ShowCart(props) {
  const { total } = props;
  // const [products, setProducts] = useState(false);

  // useEffect(() => {
  //   getProducts(setProducts);
  // }, []);

  return (
    <div>
      <Link to="/orders/:id">
        <button
          data-testid="checkout-bottom-btn-value"
          type="button"
        >
          Ver carrinho R$
          { total }
        </button>
      </Link>
    </div>
  );
}

export default ShowCart;
