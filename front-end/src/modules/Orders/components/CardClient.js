import React from 'react';

function CardClient(props) {
  const { pedido: { id, totalPrice, saleDate } } = props;
  return (
    <div
    className="flex flex-wrap border-2
      border-gray-800 w-96 h-64 m-5"
    >
      <div className="flex-col">
        <div
          data-testid={ `${id - 1}-order-number` }
          className="text-2xl"
        >
          Pedido
          {' '}
          {id}
        </div>
        <div
          data-testid={ `${id - 1}-order-address` }
        >
          {saleDate}
        </div>
        <div
          className="mt-10"
          data-testid={ `${id - 1}-order-total-value` }
        >
          R$ {totalPrice.replace('.', ',')}
        </div>
      </div>
    </div>
  );
}

export default CardClient;
