import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import './OrderDetails.css';
import { getAllSales } from '../../../services/sales';

export default function Orders() {
  const [orderDetails, setOrderDetails] = useState([]);
  
  useEffect(() => {
    const getOrderDetails = async () => {
      const [result] = await getAllSales();
      setOrderDetails(result);
    };
    getOrderDetails();
  }, []);
  
  console.log(orderDetails)    
  // dateSale: "2021-03-21T03:00:00.000Z"
  // idProduct: 2
  // idSales: 1
  // price: "7.50"
  // productName: "Heineken 600ml"
  // quantity: "5"

  return (
    <div className="body">
      <div>
        <Header title="Detalhes de Pedido" user="client" />
      </div>
      {orderDetails.map((details, index) => (
        <div className="geral">
          { index === 0 &&
            <div className="title">
              <div className="pedido">
                <h2>Pedido</h2>
                <h2 data-testid="order-number">{details.idSales}</h2>
              </div>
              <div className="data">
                <h2>Data</h2>
              <h2 data-testid="order-date">{details.dateSale}</h2>
              </div>
            </div>
          }
          <div className="detalhes" key={index}>
            <p className="quantidade" data-testid="0-product-qtd">{details.quantity}</p>
            <p className="nome" data-testid="0-product-name">{details.productName}</p>
            <p className="preço">{details.price}</p>
            <p className="subtotal"
              data-testid="0-product-total-value">
              {details.quantity * details.price}
            </p>
          </div>
        </div>
      ))};
        <div className="resumo">
          <h2>total</h2>
          <h2>

          </h2>
        </div>
      </div>
  );
}

ers
