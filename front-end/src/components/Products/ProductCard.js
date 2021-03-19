import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { handleQuantity, localStorageCart } from '../../services/ProductCardService';
import TrybeerContext from '../../context/TrybeerContext';

function ProductCard({ name, price, urlImage, index }) {
  const { cart, setCart } = useContext(TrybeerContext);
  const [quantity, setQuantity] = useState(0);
  const productInfo = { quantity, setQuantity, name, price, cart, setCart };
  useEffect(() => {
    if (localStorageCart) {
      localStorageCart.forEach((element) => {
        if (element.name === name) setQuantity(element.quantity);
      });
    }
  }, []);
  return (
    <div>
      <p
        id={ `${index}-product-name` }
        data-testid={ `${index}-product-name` }
      >
        { name }
      </p>
      <p
        id={ `${index}-product-price` }
        data-testid={ `${index}-product-price` }
      >
        { `R$ ${price.replace('.', ',')}` }
      </p>
      <img
        data-testid={ `${index}-product-img` }
        src={ urlImage }
        alt="product"
      />
      <button
        type="button"
        id={ `${index}-product-minus` }
        data-testid={ `${index}-product-minus` }
        onClick={ (event) => handleQuantity(event, productInfo) }
      >
        -
      </button>
      <span data-testid={ `${index}-product-qtd` }>{quantity}</span>
      <button
        type="button"
        id={ `${index}-product-plus` }
        data-testid={ `${index}-product-plus` }
        onClick={ (event) => handleQuantity(event, productInfo) }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
