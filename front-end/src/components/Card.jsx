import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addProduct, reduceProduct } from '../services/index';
import '../css/Card.css';

function Card(props) {
  const { product, setTotal } = props;
  const quantityStorage = localStorage.getItem(product.name);
  const [quantity, setQuantity] = useState(0);
  const { id, name, price, url_image } = product;
  const params = { quantity, setQuantity, name, setTotal, price };

  useEffect(() => {
    if (JSON.parse(quantityStorage) !== null) {
      const obj = JSON.parse(quantityStorage)
      setQuantity(obj.total);
    }
  }, [quantityStorage]);

  return (
    <div className="card-container">
      <img
        src={ `${ url_image }` }
        alt="imagem cerveja"
        data-testid={ `${id - 1 }-product-img` }
      />
      <p data-testid={ `${id - 1}-product-price` }>
        R$
        { ` ${price.replace('.', ',')}` }
      </p>
      <p data-testid={ `${product.id - 1}-product-name` }>{ product.name }</p>
      <button
        data-testid={ `${product.id - 1}-product-minus` }
        type="button"
        onClick={
          () => reduceProduct(params)
        }
      >
        -
      </button>
      <span data-testid={ `${id - 1}-product-qtd` }>{quantity}</span>
      <button
        data-testid={ `${id - 1}-product-plus` }

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
