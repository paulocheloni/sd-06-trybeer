import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

const ProductCard = ({ index, id, name, price, url_image: urlImage }) => {
  const [quantity, setQuantity] = useState(0);
  const { updateProductQuantity } = useContext(TrybeerContext);
  const formatedPrice = price.replace('.', ',');

  const handleClick = (param) => {
    if (param === 'plus') {
      setQuantity(quantity + 1);
    } else if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
    updateProductQuantity(id, quantity, price);
  };

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
      <button
        onClick={ () => handleClick('plus') }
        data-testid={ `${index}-product-plus` }
        type="button"
      >
        +
      </button>
      <p data-testid={ `${index}-product-qtd` }>{quantity}</p>
      <button
        onClick={ () => handleClick('minus') }
        data-testid={ `${index}-product-minus` }
        type="button"
      >
        -
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
};

export default ProductCard;
