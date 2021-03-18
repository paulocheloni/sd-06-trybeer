import React, { useState } from 'react';
import { addProduct, reduceProduct } from '../services/index'
import '../css/Card.css';

function Card(props) {
  const [quantity, setQuantity] = useState(0);
  const { info } = props;
  return (
    <div className="card-container">
      <img src={ info.img } alt="imagem cerveja" data-testid="0-product-img"/>
      <p data-testid="0-product-price">R$ { info.price }</p>
      <p data-testid="0-product-name">{ info.name }</p>
      <button
        data-testid="0-product-minus"
        type="button"
        onClick={ () => reduceProduct(quantity, setQuantity, info.name) }
      >-</button>
      <span data-testid="0-product-qtd">{quantity}</span>
      <button
        data-testid="0-product-plus"
        type="button"
        onClick={ () => addProduct(quantity, setQuantity, info.name) }
        >+</button>
    </div>
  );
}

export default Card;
