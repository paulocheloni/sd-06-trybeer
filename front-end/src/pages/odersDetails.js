import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import NavBar from '../components/menuNavBar';
import api from '../services/api';

function OrderDetails() {
  const { id } = useParams();

  useEffect(() => {
    api.orderDetails(id)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <NavBar content="Trybeer" />
      <h1>Admin</h1>
    </div>
  );
}

export default OrderDetails;
