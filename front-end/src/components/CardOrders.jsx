import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
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

  const DATA_MAX = 10;
  const DATA_MIN = 5;

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return <Redirect to="login" />;

  return (
    <div>
      { sales.map((sale, index) => (
        // <Link to={`/order/details/${sale.id}`}>
        <Link to="/order/details" key={ sale.id }>
          <div data-testid={ `${index}-order-card-container` }>
            <h4 data-testid={ `${index}-order-number` }>
              { `Pedido número: ${sale.id}` }
            </h4>
            <h4 data-testid={ `${index}-order-date` }>
              { `DATA: ${Object.values(sale)[5].slice(DATA_MIN, DATA_MAX)}` }
            </h4>
            <h4 data-testid={ `${index}-order-total-value` }>
              { `Valor: ${Object.values(sale)[2]}` }
            </h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
