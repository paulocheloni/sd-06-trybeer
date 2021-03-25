import React from 'react';
import * as S from './style';
import PropTypes from 'prop-types';

const ProductItemOrdered = ({ product }) => (
  <S.Products>
    <p data-testid="0-product-qtd">{ product.quantity }</p>
    <p data-testid="0-product-name">{ product.name }</p>
    <p data-testid="0-product-total-value">
      R$
      {' '}
      { (product.price * product.quantity).toFixed(2).replace(/\./g, ',') }
    </p>
  </S.Products>
);

ProductItemOrdered.propTypes = {
  ObjectWithShape: PropTypes.exact({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),

};

export default ProductItemOrdered;
