import React, {useState, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import parseCurrency from '../utils/parseCurrencyToBRL';
import Context from '../hooks/UseContext';

function ProductCard({ productInfo, index }) {
  const { totalPrice, setTotalPrice } = useContext(Context);
  const { name, price, url_image: urlImage } = productInfo;
  const [productQuantity, setProductQuantity] = useState(0);

  // useEffect(() => {
  //   const productList = localStorage.getItem('productList');

  //   const itens = productList.find((product) => product.name === name)

  //   if (!itens) {
  //     productList.push({name, price, productQuantity});
  //     localStorage.setItem('productList', itens);
  //   }
  // }, []);

  const handleQuantity = (operation) => {
    if (operation === 'minus') {
      if (Number(productQuantity) >= 1) {
        setProductQuantity(Number(productQuantity) - 1);
        setTotalPrice((Number(totalPrice) - Number(price)).toFixed(2));
      }
    }

    if (operation === 'plus') {
      setProductQuantity(Number(productQuantity) + 1);
      setTotalPrice((Number(totalPrice) + Number(price)).toFixed(2));
    }

    return Number(productQuantity);
  }

  return (
    <div>
      <img
        data-testid={ `${index}-product-img` }
        src={ urlImage }
        alt={ name }
        height="150px"
      />
      <div data-testid={ `${index}-product-name` }>{name}</div>
      <div data-testid={ `${index}-product-price` }>{parseCurrency(price)}</div>
      <div>
        <button data-testid={`${index}-product-minus`} onClick={() => handleQuantity("minus")}>-</button>
        <input data-testid={`${index}-product-qtd`} type="text" min={0} value={productQuantity} />
        <button data-testid={`${index}-product-plus`} onClick={() => handleQuantity("plus")}>+</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url_image: PropTypes.string,
}.isRequired;

export default ProductCard;
