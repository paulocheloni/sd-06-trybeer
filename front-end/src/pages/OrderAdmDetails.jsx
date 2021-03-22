import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import OrderAdmDetailsCard from '../components/OrderAdmDetailsCard';
import getSaleDetails from '../methods/salesDetails';

function OrderAdmDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [orderDetails, setOrderDetails] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const saleDetails = await getSaleDetails(id);
      if (saleDetails.redirect) {
        history.push('/login');
      } else {
        setOrderDetails(saleDetails);
      } 
    };
    fetchData();
  }, [id]);
  console.log('Assim que clicar no item:', orderDetails);
  return (
    <>
      <h1 data-testid="top-title"> Detalhe do pedido</h1>
      {orderDetails.length > 0 && <OrderAdmDetailsCard orderDetails={ orderDetails } /> }
    </>
  );
}

export default OrderAdmDetails;
