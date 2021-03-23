import React from 'react';

function DetailOrderCard(props) {
  const five = 5;
  const { sale } = props;
  console.log(sale);
  const formatDate = sale[0].sale_date
    .substr(five, five).replace('-', '/').split('/').reverse()
    .join('/');
  const formatedTotalPrice = `R$ ${sale[0].total_price.replace('.', ',')}`;
  return (
    <div
      className="m-12"
    >
      <div>
        <div
          className="flex justify-between mb-3"
          data-testid={ `${sale[0].sale_id - 1}-order-card-container` }
        >
          <div
            data-testid={ `${sale[0].sale_id - 1}-order-number` }
            className="text-4xl"
          >
            Pedido
            {' '}
            {sale[0].sale_id}
          </div>
          <div
            className="text-2xl"
            data-testid={ `${sale[0].sale_id - 1}-order-date` }
          >
            {formatDate}
          </div>
        </div>
        {sale.map((product, index) => (
          <div
            key={ index }
            className="flex justify-between border-2
      border-gray-800 text-2xl"
          >
            <div
              className="m-4"
              data-testid={ `${index}-product-qtd` }
            >
              {product.quantity}
            </div>
            <div
              className="m-4"
              data-testid={ `${index}-product-name` }
            >
              {product.name}
            </div>
            <div
              className="m-4"
              data-testid={ `${index}-product-price` }
            >
              {`R$ ${product.price.replace('.', ',')}`}
            </div>
          </div>
        ))}
        <div
          className="flex justify-end mt-3 text-2xl"
          data-testid={ `${sale[0].sale_id - 1}-order-total-value` }
        >
          Total:
          {' '}
          {formatedTotalPrice}
        </div>
      </div>
    </div>
  );
}

DetailOrderCard.propTypes = {
  sale: PropTypes.arrayOf(),
}.isRequired;

export default DetailOrderCard;
