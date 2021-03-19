import React, { useState, useContext } from 'react';
import { handleQuantity } from '../../services/ProductCardService';
import TrybeerContext from '../../context/TrybeerContext';
function ProductCard({ name, price, url_image, index}) {
  const { cart, setCart } = useContext(TrybeerContext);
  const [quantity, setQuantity] = useState(0);
  const productInfo = { quantity, setQuantity, name, price, cart, setCart };

  return (
    <div>
      <p
        id={ `${index}-product-name` }
        data-testid={ `${index}-product-name` }
      >
        { name }
      </p>
      <p
        id={ `${index}-product-price` }
        data-testid={ `${index}-product-price` }
      >
        { price }
      </p>
      <img
        data-testid={ `${index}-product-img` }
        src={ url_image }
        alt="product"
      />
      <button
        id={ `${index}-product-minus` }
        data-testid={ `${index}-product-minus` }
        onClick={ (event) => handleQuantity(event, productInfo) }
      >
        -
      </button>
      <span data-testid={ `${index}-product-qtd` }>{quantity}</span>
      <button
        id={ `${index}-product-plus` }
        data-testid={ `${index}-product-plus` }
        onClick={ (event) => handleQuantity(event, productInfo) }
      >
        +
      </button>
    </div>
  );
}

export default ProductCard;
