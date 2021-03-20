import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { addProduct, reduceProduct } from '../services/index';
=======
import { addProduct, reduceProduct } from '../services/index'
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638
import '../css/Card.css';

function Card(props) {
  const { product } = props;
  const quantityStorage = localStorage.getItem(product.name);
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="card-container">
<<<<<<< HEAD
      <img src={ `${product.url_image}` } alt="imagem cerveja" data-testid={ `${product.id}-product-img` } />
      <p data-testid={ `${product.id}-product-price` }>
        R$
        { product.price }
      </p>
      <p data-testid={ `${product.id}-product-name` }>{ product.name }</p>
      <button
        data-testid={ `${product.id}-product-minus` }
        type="button"
        onClick={ () => reduceProduct(quantity, setQuantity, product.name) }
      >
        -
      </button>
      <span data-testid={ `${product.id}-product-qtd` }>{quantity}</span>
      <button
        data-testid={ `${product.id}-product-plus` }
        type="button"
        onClick={ () => addProduct(quantity, setQuantity, product.name) }
      >
        +
      </button>
      <button onClick={ () => console.log(quantityStorage) }>Quantity</button>
=======
      <img src={`${product.url_image}`} alt="imagem cerveja" data-testid={`${product.id}-product-img`}/>
      <p data-testid={`${product.id}-product-price`}>R$ { product.price }</p>
      <p data-testid={`${product.id}-product-name`}>{ product.name }</p>
      <button
        data-testid={`${product.id}-product-minus`}
        type="button"
        onClick={ () => reduceProduct(quantity, setQuantity, product.name) }
      >-</button>
      <span data-testid={`${product.id}-product-qtd`}>{quantity}</span>
      <button
        data-testid={`${product.id}-product-plus`}
        type="button"
        onClick={ () => addProduct(quantity, setQuantity, product.name) }
      >+</button>
      <button onClick={() => console.log(quantityStorage)}>Quantity</button>
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638

    </div>
  );
}

export default Card;
