import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import  { getOrderDetails } from '../services/api';

function OrderDetails(props) {
  const { match: { params: { id: orderId } } } = props;
  console.log('Param', orderId);
  console.log(typeof orderId);

  const loggedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getOrderDetails(orderId).then((result) => console.log(result));
  });
  return (
    <div>
      { !loggedUser && <Redirect to="/login" /> }
      <TopBar title="Detalhes do Pedido" />
      Detalhes dos Pedidos
    </div>
  );
}

export default OrderDetails;

OrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
