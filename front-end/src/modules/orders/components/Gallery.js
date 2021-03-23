import React, { useState, useEffect } from 'react';
import api from '../../../axios';
import OrderCard from './OrderCard';

function Gallery() {
  const [orders, setOrders] = useState([]);
  const { id } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    api.get('/sales', { user_id: id }).then((resp) => setOrders(resp.data));
  }, []);

  return (
    <div className="grid md:grid-cols-4 gap-8 align-baseline">
      { orders.length > 0 && orders.map((order, index) => OrderCard(order, index)) }
      { orders.length === 0 && 'you dont have orders yet.'}
    </div>
  );
}

export default Gallery;
