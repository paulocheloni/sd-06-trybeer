import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';
import formatedPrice from '../utils/formatedPrice';
import './ComponentsCSS/ProductCard.css'

const ProductCard = ({ index, id, name, price, url_image: urlImage }) => {
  const [quantity, setQuantity] = useState(0);
  const { cart, updateProductQuantity } = useContext(TrybeerContext);
  // const formatedPrice = price.replace('.', ',');

  useEffect(() => {
    const productById = cart.find((item) => item.id === id);
    if (productById !== undefined) {
      setQuantity(productById.quantity);
    }
  }, [cart, id]);

  const increaseQuantity = () => {
    const result = quantity + 1;
    setQuantity(result);
    updateProductQuantity(id, name, result, price);
  };

  const decreaseQuantity = () => {
    if (quantity !== 0) {
      const result = quantity - 1;
      setQuantity(result);
      updateProductQuantity(id, name, result, price);
    }
  };

  return (
    <div className="product-card">
      <div class="card-deck">
        <img
          class="card-img-top"
          data-testid={ `${index}-product-img` }
          className="product-card-image"
          alt={ name }
          src={ urlImage }
        />
        <div class="card-body">
        <p data-testid={ `${index}-product-name` }>{name}</p>
        <p data-testid={ `${index}-product-price` }>{formatedPrice(price)}</p>
        {/* <p data-testid={ `${index}-product-price` }>{`R$ ${formatedPrice}`}</p> */}
        </div>
        <div className="quantity-controller" class="cardFooter">
          <button
            onClick={ decreaseQuantity }
            data-testid={ `${index}-product-minus` }
            type="button"
            class="btn"
          >
            -
          </button>
          <p data-testid={ `${index}-product-qtd` } class="totalValue">Unidades: {quantity}</p>
          <button
            onClick={ increaseQuantity }
            data-testid={ `${index}-product-plus` }
            type="button"
            class="btn"
          >
            +
          </button>
        </div>
      </div>
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
