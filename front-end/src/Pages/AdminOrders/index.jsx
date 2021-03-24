import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardOrder from '../../Components/CardOrder';
import MenuAdmin from '../../Components/MenuAdmin';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const fetchOrders = await Axios
        .get('http://localhost:3001/admin/orders');
      console.log('o que vem no fetch:', fetchOrders.data);
      return setOrders(fetchOrders.data);
    };
    getOrders();
  }, []);
  return (
    <div>
      <MenuAdmin />
      <span>Pedidos</span>
      <CardOrder orders={ orders } />
    </div>
  );
};

export default AdminOrders;
