import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../../../components/Header/Header';
import AdminOrderCard from '../../../components/AdminOrderCard/AdminOrderCard';


export default function Orders() {
  const history = useHistory();

  // const handleRedirect = (numeroDoPedido) => {
  //   history.push(`/orders/:${numeroDoPedido}`);
  // } USAR PARA REDIRECIONAR PARA O PEDIDO QUANDO CLICAR NELE
  return (
    <div>
      <Header title="TryBeer" user="admin" />
      <AdminOrderCard />
    </div>
  );
}
