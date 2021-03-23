import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../../axios';

function DetailedOrderCard(props) {
  const [order, setOrder] = useState();
  const { match: { params: { id } } } = props;

  useEffect(() => {
    api.get(`/sales/${id}`).then((resp) => setOrder(resp.data));
  }, []);

  return (
    <div className="flex flex-col">
      <p
        className="flex items-center space-x-2"
        data-testid="order-number"
      >
        Número do pedido:
        { order ? order.number : '' }
      </p>
      <p
        className="flex items-center space-x-2"
        data-testid="order-date"
      >
        Data do pedido:
        { order ? order.createdAt : '' }
      </p>
      <p
        className="flex items-center space-x-2"
        data-testid="order-total-value"
      >
        Total do pedido:
        { order ? order.total : '' }
      </p>
      { order && order.products.map((product, index) => (
        <div
          key={ index }
          className="border rounded-md border-primary p-2 flex flex-col items-center"
        >
          <div className="w-50 h-50 border-gray-200 border p-2">
            <img
              src={ product.photo }
              className="round-md object-contain
                w-80 h-80 md:w-48 md:h-48 md:object-scale-down"
              alt={ product.name }
            />
          </div>
          <div className="flex flex-col">
            <p>
              <strong>{ `R$ ${product.price.replace('.', ',')}` }</strong>
            </p>
            <p data-testid={ `${index}-product-name` }>
              { product.name }
            </p>
            <p data-testid={ `${index}-product-qtd` }>
              { product.quantity }
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

DetailedOrderCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(DetailedOrderCard);
