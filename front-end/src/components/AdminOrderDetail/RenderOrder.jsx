import React from 'react';
import PropTypes from 'prop-types';

function RenderOrder({ productDetail }) {
  return (
    <div>
      {productDetail.map((item, index) => (
        <div key={ index }>
          <p data-testid={ `${index}-product-qtd` }>{item.productQuantity}</p>
          <span data-testid={ `${index}-product-name` }>{item.productName}</span>
          <p
            data-testid={ `${index}-product-total-value` }
          >
            {`R$ ${(item.productPrice * item.productQuantity)
              .toFixed(2).replace('.', ',')}`}
          </p>
          <span
            data-testid={ `${index}-order-unit-price` }
          >
            {`(R$ ${item.productPrice.replace('.', ',')})`}
          </span>
        </div>
      ))}
      <p
        data-testid="order-total-value"
      >
        {`Total: R$ ${productDetail.map((item) => item.totalPrice.replace('.', ','))[0]}`}
      </p>
    </div>
  );
}

RenderOrder.propTypes = {
  productDetail: PropTypes.objectOf(Object).isRequired,
};

export default RenderOrder;
