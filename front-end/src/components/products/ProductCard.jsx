import React from 'react';
import PropTypes from 'prop-types';

import { FiPlus, FiMinus } from 'react-icons/fi';

const ProductCard = ({ product, index, plusItemCart, minusItemCart, handleItem }) => {
  console.log('');
  return (
    <div>
      <img
        alt={ `Cerveja ${product.name}` }
        data-testid={ `${index}-product-img` }
        src={ product.image }
      />
      <span
        data-testid={ `${index}-product-price` }
      >
        { `R$ ${product.price.toFixed(2).replace('.', ',')}` }
      </span>
      <span
        data-testid={ `${index}-product-name` }
      >
        { product.name }
      </span>
      <button
        type="button"
        name={ product.name }
        data-testid={ `${index}-product-plus` }
        onClick={ () => plusItemCart(product) }
      >
        <FiPlus />
      </button>
      <span
        data-testid={ `${index}-product-qtd` }
      >
        {/* { (state.quantity >= 0) ? state.quantity : 0 } */}
        {/* { quantity } */}
        { handleItem(product) }
      </span>
      <button
        type="button"
        data-testid={ `${index}-product-minus` }
        onClick={ () => minusItemCart(product) }
      >
        <FiMinus />
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.objectOf(Object).isRequired,
  plusItemCart: PropTypes.func(Function).isRequired,
  minusItemCart: PropTypes.func(Function).isRequired,
  handleItem: PropTypes.func(Function).isRequired,
};

export default ProductCard;
