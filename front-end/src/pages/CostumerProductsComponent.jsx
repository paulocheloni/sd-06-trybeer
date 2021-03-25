import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Header, ProductsCards } from '../components';
import BeersAppContext from '../context/BeersAppContext';

import '../style/CostumerProducts.css';

function CostumerProducts() {
  const history = useHistory();
  const {
    user: { token },
    amount,
  } = useContext(BeersAppContext);

  if (!token) history.push('/login');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = '/products';
    fetch(
      `http://localhost:3001${url}`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      },
    ).then((response) => response.json()
      .then((data) => {
        setProducts(data);
      }));
  }, []);

  const clickRedirect = () => history.push('/checkout');

  const commaAmount = `${amount.toFixed(2)}`.replace('.', ',');

  return (
    <div>
      {/* className="product-page" */}
      <Header text="TryBeer" id="top-title" />
      <div className="product-list">
        {products.map((element, index) => (
          <div key={ element.id }>
            <ProductsCards
              element={ element }
              index={ index }
            />
          </div>
        ))}
      </div>
      <div>
        <button
          type="button"
          onClick={ clickRedirect }
          data-testid="checkout-bottom-btn"
          disabled={ Math.trunc(amount * 100) === 0 }
          className="product-bottom"
        >
          Ver Carrinho
          {' '}
          <span
            data-testid="checkout-bottom-btn-value"
            className="value-product"
          >
            { `R$ ${commaAmount}` }
          </span>
        </button>
      </div>
    </div>
  );
}

export default CostumerProducts;
