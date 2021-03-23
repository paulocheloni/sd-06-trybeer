import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCardAdm from './ProductCardAdm';
import currencyFormat from '../utils/currencyFormat';
import updateStatus from '../methods/updateStatus';

function OrderDetailsCard({ orderDetails }) {
  // fazer um hook pra atualizar a pagina dps da requisicao
  const [update, setUpdate] = useState(orderDetails[0]);
  let visible = false;
  // if (orderDetails[0].statusSale && orderDetails[0].statusSale === 'Pendente') {
  // orderDetails[0].statusSale = status desta venda
  // caso exista e esteja Pendente, entrar no BD e mudar para Entregue
  //   visible = true;
  // }
  if (update && update.status === 'Entregue') {
    console.log('mudou para entregue');
    visible = true;
  }

  if (orderDetails[0]) {
    return (

      <div>
        <div>
          <span data-testid="order-number">{`Pedido ${orderDetails[0].id}`}</span>
          <span data-testid="order-status">{` - ${orderDetails[0].statusSale}`}</span>
        </div>
        <div>
          {orderDetails.map(
            (product) => (<ProductCardAdm
              product={ product }
              key={ product.productName }
            />),
          )}
          <p data-testid="order-total-value">
            total do pedido:
            {' '}
            {currencyFormat(Number(orderDetails[0].saleTotal))}
            {' '}
          </p>
          <hr />
        </div>
        { visible
        && (
          <button
            data-testid="mark-as-delivered-btn"
            type="button"
            onClick={ async () => setUpdate(await updateStatus(orderDetails[0])) }
          >
            Marcar como entregue
          </button>
        ) }
      </div>);
  }
  return <p>...loading </p>;
}

OrderDetailsCard.propTypes = {
  orderDetails: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default OrderDetailsCard;
