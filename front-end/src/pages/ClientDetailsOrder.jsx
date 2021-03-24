import React, { useContext, useEffect, useState } from 'react';
import BeerContext from '../context/BeerContext'
// import { getOrdersById } from '../api/index'
import * as axiosHandler from 'axios';

function ClientDetailsOrder() {
  const {
    idOrder,
    setIdOrder,
  } = useContext(BeerContext);
  const [order, setOrder] = useState('')

  useEffect(() => {
    const buildAxiosHandler = () => {
      const axios = axiosHandler.create({
        baseURL: 'http://localhost:3001',
      });
    
      return axios;
    };
    async function getOrdersById() {
      const axios = buildAxiosHandler();
      const token = localStorage.getItem('token');
      const saleId = idOrder
      console.log(saleId)
      axios.get(`/sales/products/${saleId}`, {
        headers: {
          authorization: token,
        } }).then((response) => {
          setOrder(response.data)
        });
    }
    getOrdersById()
  }, []);

  return (
    <div>
      <h1>{JSON.stringify(idOrder)}</h1>
      <button onClick={() => console.log('api', order) }>console</button>
    </div>
  );
}

export default ClientDetailsOrder;
