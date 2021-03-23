import React, { useEffect, useContext } from 'react';
import SideBarAdmin from '../components/SideBarAdmin';

// import { Redirect } from 'react-router';
import { getAllSales } from '../services/api';
import TrybeerContext from '../context/TrybeerContext';

import './Admin.css';

function AdminOrders() {
  const { sales, setSales } = useContext(TrybeerContext);

  useEffect(() => {
    getAllSales()
      .then((salesAPI) => setSales(salesAPI));
  }, []);

  const teste = [
    {address: 'rua c', number: 20, totalPrice: 23.40, status: 'Pendente'},
    {address: 'rua A', number: 970, totalPrice: 103.40, status: 'Pendente'},
    {address: 'rua U', number: 560, totalPrice: 765.40, status: 'Pendente'},
  ];

  return (
    <div className="div-main">
      <SideBarAdmin />
      <div className="div-filha">
        <h1 className="title">Admin Orders</h1>
        { teste.map((sale, index) => {
          return (
            <div>
              <h2 data-testid={`${index}-order-number`}>Pedido {index + 1}</h2>
              <p data-testid={`${index}-order-address`}>{sale.address}, {sale.number}</p>
              <h3 data-testid={`${index}-order-total-value`}>{sale.totalPrice}</h3>
              <h3 data-testid={`${index}-order-status`}>{sale.status}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default AdminOrders;
