import React from 'react';
import { useHistory } from 'react-router-dom';
import bancoDeDados from '../pedidosPendentes';

// , { useEffect, useState } from 'react';
// import fetchSales from '../methods/sales'

// const getSales = async () => {
//   const mySales = await fetchProducts();
//   console.log( mySales )
//   return mySales;
// }

function AdminOrdersCard() {
  const route = useHistory();
  // const [allSales, setAllSales] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     setAllSales(await fetchSales());
  //   })();
  // }, []);
  // getSales()
  // console.log(allSales)
  return (
    <div>
      { bancoDeDados.map((e, i) =>
        <a
          key={ e.id }
          className="order-card"
          onClick={ () => route.push(`/admin/orders/${e.id}`) }
        >
          <h1 data-testid={ `${i}-order-number` }>{ `Pedido ${e.delivery_number}` }</h1>
          <p data-testid={ `${i}-order-address` }>{ e.delivery_address }</p>
          <span data-testid={ `${i}-order-total-value` }>{`R$ ${e.total_price}` }</span>
          <span data-testid={ `${i}-order-status` }>
            { e.status ? 'Pendente' : 'Entregue' }
          </span>
        </a>
      )}
    </div>
  );
}

export default AdminOrdersCard;
