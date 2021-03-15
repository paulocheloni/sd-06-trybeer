import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ index, name, price, url_image: urlImage }) => {
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
      <button data-testid={ `${index}-product-plus` } type="button">+</button>
      <p data-testid={ `${index}-product-qtd` }>0</p>
      <button data-testid={ `${index}-product-minus` } type="button">-</button>
    </div>
  );
};

ProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
};

export default ProductCard;
