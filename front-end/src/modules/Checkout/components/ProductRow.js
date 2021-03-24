import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import ContextBeer from '../../../context/ContextBeer';

function ProductRow({ product, testIdNumber }) {
  const { price, quantity, id } = product;
  const {
    products,
    removeProduct,
    findProduct,
  } = useContext(ContextBeer);

  const [productName, setProductName] = useState('');
  const [productStringPrice, setProductStringPrice] = useState('');

  const fullPrice = `R$ ${(parseFloat(price) * quantity).toFixed(2).replace('.', ',')}`;

  const onClick = () => {
    removeProduct(id);
  };

  useEffect(() => {
    if (products.length !== 0) {
      const currentProduct = findProduct(id);
      const { name, stringPrice } = currentProduct;
      setProductName(name);
      setProductStringPrice(stringPrice);
    }
  }, [products, findProduct, id]);

  return (
    <div className="flex w-full justify-between">
      <div>
        <p data-testid={ `${testIdNumber}-product-qtd-input` }>{ quantity }</p>
      </div>
      <div>
        <p data-testid={ `${testIdNumber}-product-name` }>{ productName }</p>
      </div>
      <div>
        <p data-testid={ `${testIdNumber}-product-total-value` }>
          { fullPrice }
        </p>
      </div>
      <div>
        <p data-testid={ `${testIdNumber}-product-unit-price` }>
          { `(${productStringPrice} un)` }
        </p>
      </div>
      <button
        data-testid={ `${testIdNumber}-removal-button` }
        type="button"
        className="focus:outline-none"
        onClick={ () => onClick() }
      >
        <FaIcons.FaWindowClose />
      </button>
    </div>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    urlImage: PropTypes.string,
  }),
  testIdNumber: PropTypes.number,
}.isRequired;

export default ProductRow;
