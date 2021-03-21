import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function OrderDetailsCard({ orderDetails }) {
  return (
    <div>
      <p data-testid="order-number">{orderDetails.number}</p>
      <p data-testid="order-date">{orderDetails.saleDate}</p>
      {orderDetails.products.map(
        (product) => <ProductCard product={ product } key={ product.name } />,
      )}
      <p data-testid="order-total-value">
        {orderDetails.totalPrice}
        {' '}
      </p>
    </div>);
}

OrderDetailsCard.propTypes = {
  orderDetails: PropTypes.shape({
    number: PropTypes.number.isRequired,
    saleDate: PropTypes.string,
    products: PropTypes.array(PropTypes.any),
    totalPrice: PropTypes.number,
  }).isRequired,
};

export default OrderDetailsCard;
