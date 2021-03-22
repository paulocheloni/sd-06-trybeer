import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsCard from '../components/OrderDetailsCard';
import getSaleDetails from '../methods/salesDetails';

function OrderDetails() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const saleDetails = await getSaleDetails(id);
      setOrderDetails(saleDetails);
    };
    fetchData();
  }, [id]);
  return (
    <>
      <h1 data-testid="top-title"> Detalhe do pedido</h1>
      {orderDetails.length > 0 && <OrderDetailsCard orderDetails={ orderDetails } /> }
    </>
  );
}

export default OrderDetails;
