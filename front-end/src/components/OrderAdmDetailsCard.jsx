import React from 'react';
import PropTypes from 'prop-types';
import ProductCardAdm from './ProductCardAdm';
import currencyFormat from '../utils/currencyFormat';
import updateStatus from '../methods/updateStatus';

// const handleChanges = async (disabledButton, id) => {
//   try {
//     disabledButton(true);
//   } catch (err) {
//     disabledButton(false);
//   }
// };

function OrderDetailsCard({ orderDetails }) {
  // const [status, setStatus] = useState('');
  // const [buttonState, setButtonState] = useState(false);
  // console.log(status);
  const status = false;

  // handleChanges(setButtonState, orderDetails[0]);

  console.log(orderDetails);
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
        <button
          data-testid="mark-as-delivered-btn"
          type="button"
          disabled={ !status }
          onClick={ async () => updateStatus(orderDetails[0].id) }
        >
          Marcar como entregue
        </button>
      </div>);
  }
  return <p>...loading </p>;
}

OrderDetailsCard.propTypes = {
  orderDetails: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default OrderDetailsCard;
