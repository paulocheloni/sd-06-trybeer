import React from 'react';
import PropTypes from 'prop-types';

const CardOrder = ({ product, index }) => {
  const { quantity, price, name } = product;
  return (
    <li>
      {/* <h2>{`Pedido ${index + 1}`}</h2> */}
      <div
        data-testid={ `${index}-product-qtd` }
      >
        { `${quantity} -` }
      </div>
      <div
        data-testid={ `${index}-product-name` }
      >
        { name }
      </div>
      <div
        data-testid={ `${index}-order-unit-price` }
      >
        {`Valor do produto: R$ ${price.replace('.', ',')}`}
      </div>
      <div
        data-testid={ `${index}-product-total-value` }
      >
        {`Valor total do produto: R$ ${price.replace('.', ',')}`}
      </div>
    </li>
  );
};

const { number, instanceOf } = PropTypes;

CardOrder.propTypes = {
  product: instanceOf(Object).isRequired,
  index: number.isRequired,
};

export default CardOrder;
