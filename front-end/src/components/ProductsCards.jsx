import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import BeersAppContext from '../context/BeersAppContext';
import '../style/ProductCard.css';

function ProductsCard({ element, index }) {
  const {
    productQuantity,
    setProductQuantity,
    amount,
    setAmount,
  } = useContext(BeersAppContext);

  const { name, url_image: urlImage, price, id } = element;
  // console.log(element);

  // const [image, setImage] = useState('');

  const storageInitialState = () => {
    const objQuantity = productQuantity
      .find((objStoraged) => objStoraged.id === id);
    if (objQuantity) return objQuantity.qnt;
    return 0;
  };

  const [qnt, setQnt] = useState(storageInitialState());

  useEffect(() => {
    const ola = productQuantity
      .filter((objStoraged) => objStoraged.id !== id);
    if (qnt !== 0) setProductQuantity([...ola, { id, qnt }]);
    else setProductQuantity(ola);
  }, [qnt]);

  // url_imagea

  const clickPlus = () => {
    setQnt(qnt + 1);
    const priceTotal = parseFloat(amount) + parseFloat(price);
    setAmount(Number(priceTotal.toFixed(2)));
  };

  const clickMinus = () => {
    if (qnt > 0) {
      setQnt(qnt - 1);
      const priceTotal = parseFloat(amount) - parseFloat(price);
      setAmount(Number(priceTotal.toFixed(2)));
    }
  };

  const commaPrice = price.replace('.', ',');

  return (
    <div className="productCards">
      <img
        src={ urlImage }
        data-testid={ `${index}-product-img` }
        alt="beer"
      />
      <div className="productCards_title">
        <p data-testid={ `${index}-product-name` }>{ name }</p>
        <p
          className="txt-productCards"
          data-testid={ `${index}-product-price` }
        >
          { `R$ ${commaPrice}` }
        </p>
      </div>
      <div className="productCards-qtt">
        <button
          type="button"
          data-testid={ `${index}-product-plus` }
          onClick={ clickPlus }
        >
          +
        </button>
        <p data-testid={ `${index}-product-qtd` }>{ qnt }</p>
        <button
          type="button"
          data-testid={ `${index}-product-minus` }
          onClick={ clickMinus }
        >
          -
        </button>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    url_image: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductsCard;
