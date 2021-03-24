import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ParseCurrency from '../utils/parseCurrencyToBRL';
import { formatDate } from '../utils/index';

function OrderCard({ orderInfo, index }) {
  const {
    id: orderId,
    total_price: totalPrice,
    sale_date: date,
  } = orderInfo;

  const history = useHistory();

  return (
    <button type="button" onClick={ () => history.push(`/orders/${orderId}`) }>
      <h3>
        <div data-testid={ `${index}-order-number` }>{`Pedido ${orderId}`}</div>
        <div data-testid={ `${index}-order-date` }>{formatDate(date)}</div>
      </h3>
      <div data-testid={ `${index}-order-total-value` }>{ParseCurrency(totalPrice)}</div>
    </button>

  );
}

OrderCard.propTypes = {
  orderInfo: {
    id: PropTypes.number,
    totalPrice: PropTypes.string,
    date: PropTypes.string,
  }.isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderCard;
