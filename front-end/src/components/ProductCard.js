import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

const ProductCard = ({ index, name, price, url_image: urlImage }) => {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(TrybeerContext);

  const formatedPrice = price.replace('.', ',');
  
  const handleClick = (param, value) => {
    const floatedPrice = parseFloat(value);
    const localCart = JSON.parse(localStorage.getItem('userCart'));

    if (param === 'plus') {
      setQuantity(() => parseInt(quantity + 1));
      if (localCart) {
        const newValue = parseFloat(localCart) + floatedPrice;
        localStorage.setItem('userCart', JSON.stringify(newValue));
        setCart(newValue);
      } else {
        localStorage.setItem('userCart', JSON.stringify(value));
        setCart(value);
      }
    } else {
      if (quantity !== 0) {
        setQuantity(() => parseInt(quantity - 1));
        if (localCart) {
          const newValue = parseFloat(localCart) - floatedPrice;
          localStorage.setItem('userCart', JSON.stringify(newValue));
          setCart(newValue);
        } else {
          localStorage.setItem('userCart', JSON.stringify(value));
          setCart(value);
        }
      }
    }
  }

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
        onClick={ () => handleClick('plus', price) }
        data-testid={ `${index}-product-plus` }
        type="button"
      >
        +
      </button>
      <p data-testid={ `${index}-product-qtd` }>{quantity}</p>
      <button
        onClick={ () => handleClick('minus', price) }
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
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
};

export default ProductCard;
