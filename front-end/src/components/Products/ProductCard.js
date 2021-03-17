import React, { useState } from 'react';
import handleQuantity from '../../services/ProductCardService';

function ProductCart({ name, price, url_image, index}) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <p data-testid={`${index}-product-name`}>{ name }</p>
      <p data-testid={`${index}-product-price`}>{ price }</p>
      <img
        data-testid={`${index}-product-img`}
        src={ url_image }
        alt="product"
      />
      <button
        data-testid={`${index}-product-minus`}
        onClick={(event) => handleQuantity(event, quantity, setQuantity) }
      >
        -
      </button>
      <span data-testid={`${index}-product-qtd`}>{ quantity }</span>
      <button
        data-testid={`${index}-product-plus`}
        onClick={(event) => handleQuantity(event, quantity, setQuantity) }
      >
        +
      </button>
    </div>
  );
}

export default ProductCart;
