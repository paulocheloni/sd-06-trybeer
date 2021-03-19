import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuTop from '../components/MenuTop';
import OrderDetailsCard from '../components/OrderDetailsCard';

function OrderDetails() {
  const [data, setData] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetchData = async () => {
      const orderDetails = await fetchOrderDetails(id);
      setData(orderDetails);
    };
  }, [id]);

  return (
    <>
      <MenuTop title="TryBeer" />
      <h1>detalhe do pedido</h1>
      <OrderDetailsCard order={ data } />
    </>
  );
}

export default OrderDetails;
