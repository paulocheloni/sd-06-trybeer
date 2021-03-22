import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        // <Link to={`/order/details/${sale.id}`}>
        <Link to="/order/details">
          <div data-testid={ `${index}-order-card-container` } key={ sale.id }>
            <h4 data-testid={ `${index}-order-number` }>{ `Pedido número: ${sale.id}` }</h4>
            <h4 data-testid={ `${index}-order-date` }>{ `DATA: ${Object.values(sale)[5].slice(5, 10)}` }</h4>
            <h4 data-testid={ `${index}-order-total-value` }>{ `Valor: ${Object.values(sale)[2]}` }</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
