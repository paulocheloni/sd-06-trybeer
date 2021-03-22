import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import CardAdmin from '../../../design-components/CardAdmin';
// import mockPedidos from '../../../services/mockPedidos'

function AdminOrders() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then((response) => {
        setSales(response.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <SideBarAdmin />
      { sales.map((pedido, index) => (
        <Link key={ pedido.id } to={ `/admin/orders/${pedido.id}` }>
          <CardAdmin key={ pedido.id } pedido={ pedido } IndexId={ index } />
        </Link>
      ))}
    </div>
  );
}

export default AdminOrders;
