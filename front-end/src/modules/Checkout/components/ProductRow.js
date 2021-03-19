import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import ContextBeer from '../../../context/ContextBeer';

function ProductRow({ product, testIdNumber }) {
  const { name, price, quantity, id } = product;
  const { sale, setSale } = useContext(ContextBeer);

  const onClick = () => {
    const products = sale.products.filter((thisProduct) => thisProduct.id !== id);
    const total = products
      .reduce((acc, curr) => acc + (parseFloat(curr.price) * curr.quantity), 0)
      .toFixed(2);
    setSale({
      products,
      total,
    });
  };

  return (
    <div className="flex w-full justify-between">
      <div>
        <p data-testid={ `${testIdNumber}-product-qtd-input` }>{ quantity }</p>
      </div>
      <div>
        <p data-testid={ `${testIdNumber}-product-name` }>{ name }</p>
      </div>
      <div>
        <p data-testid={ `${testIdNumber}-product-total-value` }>
          { `R$ ${(parseFloat(price) * quantity).toFixed(2).replace('.', ',')}` }
        </p>
      </div>
      <div>
        <p data-testid={ `${testIdNumber}-product-unit-price` }>
          { `(R$ ${price.replace('.', ',')} un)` }
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
