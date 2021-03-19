import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import ContextBeer from '../context/ContextBeer';

function Card({ product, testIdNumber }) {
  const { id, name, price, urlImage, quantity: prevQuantity } = product;
  const {
    sale,
    setSale,
  } = useContext(ContextBeer);

  const [localQuantity, setLocalQuantity] = useState(prevQuantity);

  console.log('card number ', testIdNumber);

  const handleClickPlus = () => {
    const quantity = localQuantity + 1;
    setLocalQuantity(quantity);
    const products = sale.products.filter((thisProduct) => thisProduct.id !== id);
    const currentProduct = { id, name, urlImage, price, quantity };
    products.push(currentProduct);
    const total = products
      .reduce((acc, curr) => acc + (parseFloat(curr.price) * curr.quantity), 0)
      .toFixed(2);
    setSale({
      products,
      total,
    });
  };

  const handleClickMinus = () => {
    if (localQuantity <= 0) return;
    const quantity = localQuantity - 1;
    setLocalQuantity(quantity);
    const products = sale.products.filter((thisProduct) => thisProduct.id !== id);
    const currentProduct = { id, name, urlImage, price, quantity };
    products.push(currentProduct);
    const total = products
      .reduce((acc, curr) => (acc + (parseFloat(curr.price) * curr.quantity)), 0)
      .toFixed(2);
    setSale({
      products,
      total,
    });
  };

  return (
    <div
      className="flex flex-col items-center justify-center border-2
      border-gray-800 w-64 h-96 m-5"
    >
      <div className="relative side-menu-container flex flex-col space-y-4 items-center">
        <img
          src={ urlImage }
          alt={ name }
          className="mx-auto h-24 w-24 w-auto"
          data-testid={ `${testIdNumber}-product-img` }
        />
        <p data-testid={ `${testIdNumber}-product-name` }>{name}</p>
        <p data-testid={ `${testIdNumber}-product-price` }>
          {`R$ ${price.replace('.', ',')}`}
        </p>
      </div>
      <div className="relative side-menu-container flex justify-center items-center">
        <button
          type="button"
          onClick={ () => handleClickPlus() }
          data-testid={ `${testIdNumber}-product-plus` }
        >
          <FaIcons.FaPlusSquare />
        </button>
        <p
          className=""
          data-testid={ `${testIdNumber}-product-qtd` }
        >
          {localQuantity}
        </p>
        <button
          type="button"
          onClick={ () => handleClickMinus() }
          data-testid={ `${testIdNumber}-product-minus` }
        >
          <FaIcons.FaMinusSquare />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    urlImage: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  testIdNumber: PropTypes.number.isRequired,
};

export default Card;
