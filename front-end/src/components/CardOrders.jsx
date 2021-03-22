import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function CardOrders() {
  const [sales, setSales] = useState([]);
  const fetchApiSales = async () => {
    const allSales = await api.fetchSales();
    const salesOrder = allSales.sort((a, b) => a.id - b.id);

    setSales(salesOrder);
  };
  useEffect(() => {
    fetchApiSales();
  }, []);

  return (
    <div>
      {console.log(sales)}
      { sales.map((sale, index) => (
        <div data-testid={ `${index}` } key={ sale.id }>
          <h4 data-testid={ `${index}-order-number` }>{ sale.id }</h4>
          <h4 data-testid={ `${index}-order-date` }>{ sale.id }</h4>
          <h4 data-testid={ `${index}-order-total-value` }>{ sale.id }</h4>
          <h4 data-testid={ `${index}-order-number` }>{ sale.id }</h4>
        </div>
      ))}
    </div>
  );
}
