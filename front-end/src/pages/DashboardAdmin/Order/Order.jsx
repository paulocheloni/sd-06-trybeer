import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { getSales } from '../../../services/Sales';
import Header from '../../../components/Header/Header';
import AdminOrderCard from '../../../components/AdminOrderCard/AdminOrderCard';

// const isAdmin = () => {
//   const storage = JSON.parse(localStorage.getItem('user'));
//   if(storage.role !== 'administrator') return 
// }


export default function Orders() {
  const [sales, setSales] = useState([]);
  const history = useHistory();

  // QUANDO INICIAR A TELA, TRAZER OS PEDIDOS EXISTENTES
  useEffect(() => {
    const fetchSales = async () => {
      const allSales = await getSales();
      setSales(allSales);
    };
    fetchSales();
  }, []);

  //USAR PARA REDIRECIONAR PARA O PEDIDO QUANDO CLICAR NELE
  const handleRedirect = (numeroDoPedido) => {
    history.push(`/orders/:${numeroDoPedido}`);
  } 
  return (
    <div>
      <Header title="TryBeer" user="admin" />
      {(sales.length && sales.map((sale, index) => (
      <AdminOrderCard
        sale={ sale }
        key={ sale.id }
        index={ index }
        onClick={handleRedirect(sale.id)}
      />
      ))) ||
      (
      <span role="img" aria-label="empty">💸Você não possui nenhum pedido🍺</span>)}
    </div>
  );
}
