import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addProduct, reduceProduct } from '../services/index';
import '../css/Card.css';

function Card(props) {
  const { product, setTotal, products } = props;
  const quantityStorage = localStorage.getItem(product.name);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantityStorage !== null) {
      setQuantity(parseInt(quantityStorage));
    }
  }, [quantityStorage]);

  return (
    <div className="card-container">
      <img
        src={ `${product.url_image}` }
        alt="imagem cerveja"
        data-testid={ `${product.id}-product-img` }
      />
      <p data-testid={ `${product.id}-product-price` }>
        R$
        { product.price.replace('.', ',') }
      </p>
      <p data-testid={ `${product.id}-product-name` }>{ product.name }</p>
      <button
        data-testid={ `${product.id}-product-minus` }
        type="button"
        onClick={
          () => reduceProduct(quantity, setQuantity, product.name, setTotal, products)
        }
      >
        -
      </button>
      <span data-testid={ `${product.id}-product-qtd` }>{quantity}</span>
      <button
        data-testid={ `${product.id}-product-plus` }
        type="button"
        onClick={
          () => addProduct(quantity, setQuantity, product.name, setTotal, products)
        }
      >
        +
      </button>
    </div>
  );
}

Card.protoTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  }),
};

export default Card;
