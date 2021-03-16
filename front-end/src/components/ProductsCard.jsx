import React, { useContext, useState } from 'react';
import productsContext from '../context/productsContext';

export default function ProductsCard() {
  const { products } = useContext(productsContext);
  const [totalValue] = useState(0);
  const [quantity] = useState({});

  return (
    <div>
      { products.length && products.map((product, index) => (
        <div
          key={ index }
        >
          <span data-testid={ `${index}-product-price` }>
            { product.price }
          </span>
          <img
            data-testid={ `${index}-product-img` }
            src={ product.url_image }
            alt="Imagem do produto"
            width="50px"
          />
          <span data-testid={ `${index}-product-name` }>
            { product.name }
          </span>
          <button
            type="button"
            data-testid={ `${index}-product-plus` }
          >
            +
          </button>
          <span>
            { quantity[index] }
          </span>
          <button
            type="button"
            data-testid={ `${index}-product-minus` }
          >
            -
          </button>
        </div>))}
      <div>
        <button
          type="button"
          data-testid="checkout-bottom-btn"
        >
          Ver Carrinho
        </button>
        <span data-testid="checkout-bottom-btn-value">
          { totalValue }
        </span>
      </div>
    </div>
  );
}
