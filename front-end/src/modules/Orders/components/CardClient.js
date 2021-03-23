import React from 'react';

function CardClient(props) {
  const { pedido: { id, totalPrice, saleDate } } = props;
  const formatedDate = saleDate.substr(5, 5).replace('-', '/').split("/").reverse().join("/");
  const formatedTotalPrice = `R$ ${totalPrice.replace('.', ',')}`;
  return (
    <div
    className="flex flex-wrap border-2
      border-gray-800 w-96 h-64 m-5"
    >
      <div 
        className="flex-col"
        data-testid={ `${id - 1}-order-card-container` }
      >
        <div
          data-testid={ `${id - 1}-order-number` }
          className="text-2xl"
        >
          Pedido
          {' '}
          {id}
        </div>
        <div
          data-testid={ `${id - 1}-order-date` }
        >
          {formatedDate}
        </div>
        <div
          className="mt-10"
          data-testid={ `${id - 1}-order-total-value` }
        >
          {formatedTotalPrice}
        </div>
      </div>
    </div>
  );
}

export default CardClient;
