import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/CheckoutCard.css';
import BeerContext from '../context/BeerContext';
import { getSalesProductsBySaleId } from '../api/index';

function OrderCardAdmin(props) {
  const { order, index } = props;
  const total = order.total_price.replace('.', ',');
  const { setSaleDetail } = useContext(BeerContext);

  const handleClick = () => {
    async function setInfoProvider() {
      await getSalesProductsBySaleId(setSaleDetail, order.id);
    }
    setInfoProvider();
  };

  return (
    <Link to={ `/admin/orders/${order.id}` }>
      <a
        href="/admin/orders/:id"
        onClick={ () => handleClick() }
      >
        <div
          className="checkout-card-container"
          data-testid={ `${index}-order-card-container` }
        >
          <p data-testid={ `${index}-order-number` }>
            {`Pedido ${order.id}`}
          </p>

          <p data-testid={ `${index}-order-address` }>
            {`${order.delivery_address}, ${order.delivery_number}`}
          </p>

          <p data-testid={ `${index}-order-total-value` }>
            {`R$ ${total}`}
          </p>

          <p data-testid={ `${index}-order-status` }>
            {`R$ ${order.status}`}
          </p>
        </div>
      </a>
    </Link>
  );
}

OrderCardAdmin.propTypes = {
  order: PropTypes.objectOf(PropTypes.number, PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderCardAdmin;
