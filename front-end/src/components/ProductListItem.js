import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

const ProductListItem = ({ index, name, price }) => {
  const [quantity, setQuantity] = useState(0);
  const formatedPrice = price.replace('.', ',');

  return (
    <div className="product-card">
      <img
        data-testid={ `${index}-product-img` }
        className="product-card-image"
        alt={ name }
        src={ urlImage }
      />
      <p data-testid={ `${index}-product-name` }>{name}</p>
      <p data-testid={ `${index}-product-price` }>{`R$ ${formatedPrice}`}</p>
      <div className="quantity-controller">
        <button
          onClick={ decreaseQuantity }
          data-testid={ `${index}-product-minus` }
          type="button"
        >
          -
        </button>
        <p data-testid={ `${index}-product-qtd` }>{quantity}</p>
        <button
          onClick={ increaseQuantity }
          data-testid={ `${index}-product-plus` }
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
};

export default ProductListItem;
