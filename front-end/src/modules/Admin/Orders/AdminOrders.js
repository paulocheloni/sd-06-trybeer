import React from 'react';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import CardAdmin from '../../../design-components/CardAdmin';

const mockPedidos = [
  {
    id: 1,
    products: [
      {
        id: 1,
        produto: 'produto x',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto x',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto x',
        preco: '2.20',
      },
    ],
    address: 'endereço x',
    status: 'PENDENTE',
    price: 100,
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        produto: 'produto y',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto y',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto y',
        preco: '2.20',
      },
    ],
    address: 'endereço y',
    status: 'CONFIRMADO',
    price: 200,
  },
  {
    id: 3,
    products: [
      {
        id: 1,
        produto: 'produto z',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto z',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto z',
        preco: '2.20',
      },
    ],
    address: 'endereço z',
    status: 'PENDENTE',
    price: 300,
  },
];

function AdminOrders() {
  return (
    <div>
      <SideBarAdmin />
      { mockPedidos.map((pedido) => (
        <CardAdmin pedido={ pedido } key={ pedido.id } />
      ))}
    </div>
  );
}

export default AdminOrders;
