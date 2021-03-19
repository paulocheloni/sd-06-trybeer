import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function CardOrders() {
  const [sales, setSales] = useState([]);
  const fetchApiSales = async() => {

    const allSales = await api.fetchSales();
    const salesOrder = allSales.sort(function (a, b) {
      return a.id - b.id;
      }); 

    setSales(salesOrder);
  }
    useEffect(() => {
      fetchApiSales();
    }, []);

  return (
    <div>
      { sales.map((sale, index) => (
        <div data-testid={`${index}`}>
          <h4 data-testid={`${index}-order-number`}>{ sale.id }</h4>
          <h4 data-testid={`${index}-order-date`}>{ sale.id }</h4>
          <h4 data-testid={`${index}-order-total-value`}>{ sale.id }</h4>
          <h4 data-testid={`${index}-order-number`}>{ sale.id }</h4>
        </div>
      ))}
    </div>
  )
};