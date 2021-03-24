import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import ContextBeer from '../context/ContextBeer';

function Card({ product, testIdNumber }) {
  const { id, quantity, price } = product;
  const {
    products,
    clickMinus,
    clickPlus,
    findProduct,
  } = useContext(ContextBeer);

  const [productName, setProductName] = useState('');
  const [productStringPrice, setProductStringPrice] = useState('');
  const [productUrlImage, setProductUrlImage] = useState('');

  useEffect(() => {
    if (products.length !== 0) {
      const currentProduct = findProduct(id);
      const { name, stringPrice, urlImage } = currentProduct;
      setProductName(name);
      setProductStringPrice(stringPrice);
      setProductUrlImage(urlImage);
    }
  }, [products, id, findProduct]);

  // const handleClickPlus = () => {
  //   const quantity = localQuantity + 1;
  //   setLocalQuantity(quantity);
  //   const products = sale.products.filter((thisProduct) => thisProduct.id !== id);
  //   const currentProduct = { id, name, urlImage, price, quantity };
  //   products.push(currentProduct);
  //   const total = products
  //     .reduce((acc, curr) => acc + (parseFloat(curr.price) * curr.quantity), 0)
  //     .toFixed(2);
  //   setSale({
  //     products,
  //     total,
  //   });
  // };
  // const handleClickMinus = () => {
  //   if (localQuantity <= 0) return;
  //   const quantity = localQuantity - 1;
  //   setLocalQuantity(quantity);
  //   const products = sale.products.filter((thisProduct) => thisProduct.id !== id);
  //   const currentProduct = { id, name, urlImage, price, quantity };
  //   products.push(currentProduct);
  //   const total = products
  //     .reduce((acc, curr) => (acc + (parseFloat(curr.price) * curr.quantity)), 0)
  //     .toFixed(2);
  //   setSale({
  //     products,
  //     total,
  //   });
  // };

  return (
    <div
      className="flex flex-col items-center justify-center border-2
      border-gray-800 w-64 h-96 m-5"
    >
      <div className="relative side-menu-container flex flex-col space-y-4 items-center">
        <img
          src={ productUrlImage }
          alt={ productName }
          className="mx-auto h-24 w-24 w-auto"
          data-testid={ `${testIdNumber}-product-img` }
        />
        <p data-testid={ `${testIdNumber}-product-name` }>{ productName }</p>
        <p data-testid={ `${testIdNumber}-product-price` }>
          { productStringPrice }
        </p>
      </div>
      <div className="relative side-menu-container flex justify-center items-center">
        <button
          type="button"
          onClick={ () => clickPlus(id, quantity, price) }
          data-testid={ `${testIdNumber}-product-plus` }
        >
          <FaIcons.FaPlusSquare />
        </button>
        <p
          className=""
          data-testid={ `${testIdNumber}-product-qtd` }
        >
          { quantity }
        </p>
        <button
          type="button"
          onClick={ () => clickMinus(id, quantity, price) }
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
    id: PropTypes.number,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  testIdNumber: PropTypes.number.isRequired,
};

export default Card;
