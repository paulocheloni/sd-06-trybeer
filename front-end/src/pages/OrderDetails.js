import React from 'react';
import { Redirect } from 'react-router';
import TopBar from '../components/TopBar';

function OrderDetails(props) {
  const orderId = parseInt(props.match.params.id);
  console.log('Param', orderId);
  console.log(typeof orderId);

  const loggedUser = JSON.parse(localStorage.getItem('user'));  

  return (
    <div>
        { !loggedUser && <Redirect to="/login" /> }
        <TopBar title="Detalhes do Pedido" />
        Detalhes dos Pedidos
      </div>
  );
}

export default OrderDetails;
