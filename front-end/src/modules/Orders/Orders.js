import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../../design-components/TopBar'
import CardClient from './components/CardClient'

function Orders() {

  const [sales, setSales] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then((response) => {
        console.log(response.data)
        setSales(response.data)
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      Orders
      <TopBar title={'Meus Pedidos'} />
      { sales.map((pedido, index) => (
        <Link key={ pedido.id } to={ `/orders/${pedido.id}` }>
          <CardClient key={ pedido.id } pedido={ pedido } IndexId={ index }/>
        </Link>
      ))}
    </div>
  );
}

export default Orders;