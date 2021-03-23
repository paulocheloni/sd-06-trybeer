import React from 'react';
import { Link } from 'react-router-dom';
import formatedDate from '../utils/formatedDate';
import formatedPrice from '../utils/formatedPrice';

function OrderCard(props) {
  const {
    id,
    saleDate,
    totalPrice,
    index,
  } = props;

  return (
    <div
      key={ id }
      className="order-card-container"
      data-testid={ `${index}-order-card-container` }
    >
      {/* <Link to={ `/orders/${id}` }> */}
      {/* <Link to={ { pathname: `/orders/${id}`, state: allState } }> */}
        <div className="card-id-date">
          <div data-testid={ `${index}-order-number` }>
            {`Pedido ${id}` }
          </div>
          <div data-testid={ `${index}-order-date` }>
            { formatedDate(saleDate) }
          </div>
        </div>
        <div
          className="card-total"
          data-testid={ `${index}-order-total-value` }
        >
          { formatedPrice(totalPrice) }
        </div>
      {/* </Link> */}
    </div>
  )
}

export default OrderCard;
