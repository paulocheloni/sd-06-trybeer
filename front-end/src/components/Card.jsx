import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addProduct, reduceProduct } from '../services/index';
import '../css/Card.css';

function Card(props) {
  const { product, setTotal } = props;
  const quantityStorage = localStorage.getItem(product.name);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantityStorage !== null) {
      setQuantity(parseInt(quantityStorage, 10));
    }
  }, [quantityStorage]);

  const { id, name, price } = product;
  const params = { quantity, setQuantity, name, setTotal };
  return (
    <div className="card-container">
      <img
        src={ `${product.url_image}` }
        alt="imagem cerveja"
        data-testid={ `${id}-product-img` }
      />
      <p data-testid={ `${id}-product-price` }>
        R$
        { price.replace('.', ',') }
      </p>
      <p data-testid={ `${product.id}-product-name` }>{ product.name }</p>
      <button
        data-testid={ `${product.id}-product-minus` }
        type="button"
        onClick={
          () => reduceProduct(params)
        }
      >
        -
      </button>
      <span data-testid={ `${id}-product-qtd` }>{quantity}</span>
      <button
        data-testid={ `${id}-product-plus` }
        type="button"
        onClick={
          () => addProduct(params)
        }
      >
        +
      </button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
  setTotal: PropTypes.func.isRequired,
};

export default Card;
