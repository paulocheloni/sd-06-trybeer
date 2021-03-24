import React from 'react';
import PropTypes from 'prop-types';
import '../css/CheckoutCard.css';
import { Link } from 'react-router-dom';

function CheckoutCard(props) {
  const { order, index } = props;
  const magicNumberminus2 = -2;
  const magicNumber6 = 6;
  const magicNumber5 = 5;

  const date = JSON.stringify(order.sale_date).substr(magicNumber6, magicNumber5);
  const formatDate = `${date.slice(magicNumberminus2)}/${date.slice(0, 2)}`;

  return (
    <div
      className="checkout-card-container"
      data-testid={ `${index}-order-card-container` }
    >
      <Link to={ `orders/${order.id}` }>
        <p data-testid={ `${index}-order-number` }>
          Pedido
          {' '}
          {JSON.stringify(order.id)}
        </p>
      </Link>
      <p data-testid={ `${index}-order-date` }>
        Data:
        {formatDate}
      </p>
      <p data-testid={ `${index}-order-total-value` }>
        Preço: R$
        {' '}
        { order.total_price.toString().replace('.', ',') }
      </p>
    </div>
  );
}

CheckoutCard.propTypes = {
  order: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutCard;
