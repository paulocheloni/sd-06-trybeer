import React from 'react';
import PropTypes from 'prop-types';
import ProductRow from './ProductRow';

function ProductsList({ sale }) {
  const { products, total } = sale;
  return (
    <div className="flex flex-col items-center mx-auto w-96">
      {
        products.map((product, index) => (
          <ProductRow
            key={ `${index}-product` }
            testIdNumber={ index }
            product={ product }
          />
        ))
      }
      <div>
        <p data-testid="order-total-value">{ `R$ ${total.replace('.', ',')}` }</p>
      </div>
    </div>
  );
}

ProductsList.propTypes = {
  sale: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
      urlImage: PropTypes.string,
    })),
    total: PropTypes.number,
  }).isRequired,
};

export default ProductsList;
