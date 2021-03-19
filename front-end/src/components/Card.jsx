import React, { useState } from 'react';
import { addProduct, reduceProduct } from '../services/index'
import '../css/Card.css';

function Card(props) {
  const [quantity, setQuantity] = useState(0);
  const { product, index } = props;

  return (
    <div className="card-container">
      <img src={ product.img } alt="imagem cerveja" data-testid={`${index}-product-img`}/>
      <p data-testid={`${index}-product-price`}>R$ { product.price }</p>
      <p data-testid={`${index}-product-name`}>{ product.name }</p>
      <button
        data-testid={`${index}-product-minus`}
        type="button"
        onClick={ () => reduceProduct(quantity, setQuantity, product.name) }
      >
        -
      </button>
      <span data-testid={`${index}-product-qtd`}>{quantity}</span>
      <button
        data-testid={`${index}-product-plus`}
        type="button"
        onClick={ () => addProduct(quantity, setQuantity, product.name) }
      >
        +
      </button>
    </div>
  );
}

export default Card;
