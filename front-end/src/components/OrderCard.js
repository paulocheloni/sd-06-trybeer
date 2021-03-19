import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

function OrderCard(props) {
  const { saleId, streetNR, street, totalValue, status, index } = props;
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/admin/orders/${saleId}`)}>
      <p data-testid={`${index}-order-number`}>{`Pedido ${saleId}`}</p>
      <p data-testid={`${index}-order-address`}>{`${street}, ${streetNR}`}</p>
      <p data-testid={`${index}-order-total-value`}>{`R$ ${totalValue.replace('.', ',')}`}</p>
      <p data-testid={`${index}-order-status`}>{status}</p>
    </div>
  );
}

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  saleId: PropTypes.number.isRequired,
  street: PropTypes.string.isRequired,
  streetNR: PropTypes.number.isRequired,
  totalValue: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderCard;