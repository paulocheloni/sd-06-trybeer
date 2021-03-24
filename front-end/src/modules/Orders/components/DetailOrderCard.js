import React from 'react';
import PropTypes from 'prop-types';

function DetailOrderCard(props) {
  const nine = 9;
  const { sale } = props;
  const fullDate = new Date(sale[0].sale_date);
  const day = fullDate.getDate();
  const month = fullDate.getMonth();
  const formatMonth = month < nine ? `0${month + 1}` : `${month + 1}`;
  const formatDate = `${day}/${formatMonth}`;
  const formatedTotalPrice = `R$ ${sale[0].total_price.replace('.', ',')}`;

  const mult = (strNum1, strNum2) => {
    const num1 = parseFloat(strNum1);
    const num2 = parseInt(strNum2, 10);
    const formated = (num1 * num2).toFixed(2).replace('.', ',');
    return formated;
  };

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
            data-testid="order-number"
            className="text-4xl"
          >
            Pedido
            {' '}
            {sale[0].sale_id}
          </div>
          <div
            className="text-2xl"
            data-testid="order-date"
          >
            {formatDate}
          </div>
        </div>
        {sale.map((product, index) => {
          const formatedPrice = `R$ ${mult(product.price, product.quantity)}`;
          return (
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
                data-testid={ `${index}-product-total-value` }
              >
                {formatedPrice}
              </div>
            </div>

          );
        })}
        <div
          className="flex justify-end mt-3 text-2xl"
          data-testid="order-total-value"
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
