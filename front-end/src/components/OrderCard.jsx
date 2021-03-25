import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../css/CheckoutCard.css';
import { useHistory } from 'react-router-dom';
import BeerContext from '../context/BeerContext';

function CheckoutCard(props) {
  const history = useHistory();
  const { order, index } = props;
  const firstPositionMonth = 6;
  const firstPositionDay = 9;
  const length = 2;

  const {
    idOrder,
    setIdOrder,
  } = useContext(BeerContext);

  const date = JSON.stringify(order.sale_date);
  const formatDate = `${date
    .substr(firstPositionDay, length)}/${date.substr(firstPositionMonth, length)}`;

  const handleClick = () => {
    setIdOrder(order.id);
    history.push(`orders/${order.id}`);
  };

  return (
    <div
      className="checkout-card-container"
      data-testid={ `${index}-order-card-container` }
    >
      <p data-testid={ `${index}-order-number` } onClick={ () => handleClick() }>
        Pedido
        {' '}
        {JSON.stringify(order.id)}
      </p>
      <p data-testid={ `${index}-order-date` }>
        {`Data: ${formatDate}`}
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
  order: PropTypes.objectOf(PropTypes.number, PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutCard;
