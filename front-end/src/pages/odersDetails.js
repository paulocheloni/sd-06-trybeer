import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from '../components/menuNavBar';
import api from '../services/api';

function OrderDetails() {
  const [order, setOrder] = useState({});
  const{ id } = useParams();

  useEffect(() => {
    api.orderDetails(id)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar content="Trybeer" />
      <h1>Admin</h1>
    </div>
  );
}

export default OrderDetails;
