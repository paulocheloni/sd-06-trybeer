import React, { useState } from 'react';
import { addProduct, reduceProduct } from '../services/index'
import '../css/Card.css';

function Card(props) {
  const [quantity, setQuantity] = useState(0);
  const { products, index } = props;

  return (
    <div className="card-container">
      <img src={ products.img } alt="imagem cerveja" data-testid={`${index}-product-img`}/>
      <p data-testid={`${index}-product-price`}>R$ { products.price }</p>
      <p data-testid={`${index}-product-name`}>{ products.name }</p>
      <button
        data-testid={`${index}-product-minus`}
        type="button"
        onClick={ () => reduceProduct(quantity, setQuantity, products.name) }
      >
        -
      </button>
      <span data-testid={`${index}-product-qtd`}>{quantity}</span>
      <button
        data-testid={`${index}-product-plus`}
        type="button"
        onClick={ () => addProduct(quantity, setQuantity, products.name) }
      >
        +
      </button>
    </div>
  );
}

export default Card;
