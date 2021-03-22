import React, { useContext } from 'react';
import CheckoutContext from '../../context/CheckoutContext';

function ProductCard() {
  const { products, setProdutos, sumTotal } = useContext(CheckoutContext);

  const handleRemove = (productName) => {
    const remove = products.filter((item) => item.name !== productName);
    setProdutos(remove);
  };

  const formatSumTotal = () => {
    const valueSumTotal = String(sumTotal);
    return valueSumTotal.replace('.', ',');
  };

  const formatTotalCall = formatSumTotal();

  return (
    <div className="label">
      <h3 className="subtitle">Produtos</h3>
      {products.length !== 0 ? products.map((item, index) => (
        <div key={ index }>

          <p data-testid={ `${index}-product-qtd-input` }>{ item.quantity }</p>

          <p data-testid={ `${index}-product-name` }>{ item.name }</p>

          <p data-testid={ `${index}-product-total-value` }>
            {
              (item.totalValue).toFixed(2)
            }
          </p>
          <p data-testid={ `${index}-product-unit-price` }>{ item.price }</p>
          <button
            className="button is-dark"
            type="button"
            onClick={ () => handleRemove(item.name) }
            data-testid={ `${index}-removal-button` }
          >
            X
          </button>
        </div>
      )) : <h2>Não há produtos no carrinho</h2> }
      <h3 data-testid="order-total-value">
        Total:
        {`R$ ${formatTotalCall}`}
      </h3>
    </div>
  );
}

export default ProductCard;
