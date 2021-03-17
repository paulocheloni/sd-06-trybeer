import React, { useContext, useState } from 'react';
import productsContext from '../context/productsContext';

export default function ProductsCard() {
  const { products } = useContext(productsContext);
  const [totalValue, setTotalValue] = useState(0);
  const [quantity, setQuantity] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  // quantity = 0,1...10;
  // quantity = [0] = 7, [1]= 0, ... [10] = 0;
  // quantity[index] = quantity + 1;
  // como o quantity apenas não atualiza a página com o valor novo, chamamos a array com os valores pelo setQuantity que ai autaliza a página.
  // setQuantity([...quantity]);

  const handleOnClickPlusMinusButton = (e) => {
    const buttonValuePlusOrMinus = e.target.value;
    const index = e.target.id;
    // console.log('Nosso quantity', quantity);
    console.log('Nosso index', index);
    console.log('Preço do produto', products[index].price);

    if (buttonValuePlusOrMinus === 'Plus') {
      quantity[index] = (parseInt(quantity, 10) + 1);
      setQuantity([quantity[index]]);
      setTotalValue(((products[index].price) * quantity[index]).toFixed(2));
    }
    if (buttonValuePlusOrMinus === 'Minus') {
      quantity[index] = (parseInt(quantity, 10) - 1);
      if (quantity[index] < 0) return quantity[index] === 0;
      setQuantity([quantity[index]]);
      setTotalValue(((products[index].price) * quantity[index]).toFixed(2));
    }
  };

  return (
    <div>
      { products.length && products.map((product, index) => (
        <div
          key={ index }
        >
          <span data-testid={ `${index}-product-price` }>
            { product.price }
          </span>
          <img
            data-testid={ `${index}-product-img` }
            src={ product.url_image }
            alt="Imagem do produto"
            width="50px"
          />
          <span data-testid={ `${index}-product-name` }>
            { product.name }
          </span>
          <button
            type="button"
            data-testid={ `${index}-product-plus` }
            onClick={ handleOnClickPlusMinusButton }
            value="Plus"
            id={ index }
          >
            +
          </button>
          <span>
            { quantity[index] }
            {/* { quantity } */}
          </span>
          <button
            type="button"
            data-testid={ `${index}-product-minus` }
            onClick={ handleOnClickPlusMinusButton }
            value="Minus"
            id={ index }
          >
            -
          </button>
        </div>))}
      <div>
        <button
          type="button"
          data-testid="checkout-bottom-btn"
        >
          Ver Carrinho
        </button>
        <span data-testid="checkout-bottom-btn-value">
          { totalValue }
        </span>
      </div>
    </div>
  );
}
