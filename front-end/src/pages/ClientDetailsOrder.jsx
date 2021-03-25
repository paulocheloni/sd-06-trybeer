import React, { useContext, useEffect, useState } from 'react';
import BeerContext from '../context/BeerContext'
import ControllerHeader from '../components/Header-SideBar/ControllerHeader'
import CardClientDetailsOrder from '../components/ClientDetailsOrder/CardClientDetailsOrder'
import * as axiosHandler from 'axios';
import { date } from 'faker';

function ClientDetailsOrder() {
  const {
    idOrder,
    setIdOrder,
  } = useContext(BeerContext);
  const [order, setOrder] = useState('')
  const [date, setDate] = useState('')
   
  const [formattedDate, setFormattedDate] = useState(false)
  // const formattedDate = `${date.substr(9,2)}/${date.substr(6,2)}`;

  const items = [
    { name: 'Brahma 600ml', total: 2, price: '7.50', id: 4 },
    { name: 'Antarctica Pilsen 300ml', total: 2, price: '2.49', id: 3 },
    {
      name: 'Brahma Duplo Malte 350ml',
      total: 2,
      price: '2.79',
      id: 8
    }
  ]

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
    setDate(order?.sale?.saleDate)
  }, []);

  useEffect(() => {
    console.log("aqui",date)
  }, [date]);


  return (
    <div>
      <ControllerHeader />
      <h1>{`Pedido: ${idOrder}`}</h1>
      <p>{ formattedDate && `Pedido: ${formattedDate}` }</p>
      <button onClick={() => console.log(order?.sale?.saleDate) }>console</button>
    </div>
  );
}

export default ClientDetailsOrder;
