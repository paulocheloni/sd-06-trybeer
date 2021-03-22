import React from 'react';

function CardClient(props) {
  const { pedido: { id, price, date } } = props;
  return (
    <div
    className="flex flex-wrap border-2
      border-gray-800 w-96 h-64 m-5"
    >
    teste
    </div>
  );
}

export default CardClient;
