import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductRow from './ProductRow';
import ContextBeer from '../../../context/ContextBeer';

function ProductsList({ products }) {
  const {
    stringTotal,
  } = useContext(ContextBeer);
  return (
    <div className="flex flex-col items-center mx-auto w-96">
      { products.length === 0
        ? <p className="text-xl font-bold">Não há produtos no carrinho</p>
        : products.map((product, index) => (
          <ProductRow
            key={ `${index}-product` }
            testIdNumber={ index }
            product={ product }
          />
        ))}
      <div>
        <p data-testid="order-total-value">{ stringTotal }</p>
      </div>
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
};

export default ProductsList;
