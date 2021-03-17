import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import ContextBeer from '../context/ContextBeer';

function Card(props) {
  const { produto: { produto, id, imagem, preco, prevQuantity = 1 } } = props;
  const {
    sale,
    setSale,
  } = useContext(ContextBeer);

  const { products } = sale;
  const [quantity, setQuantity] = useState(prevQuantity);

  const handleClickPlus = () => {
    setQuantity(quantity + 1);
    const productFilterd = products.filter((product) => product.id !== id);// push
    const currentProduto = { produto, id, imagem, preco, quantity };
    productFilterd.push(currentProduto);
    setSale({
      ...sale, products: productFilterd,
    });
  };

  const handleClickMinus = () => {
    if (quantity <= 0) return;
    setQuantity(quantity + 1);
    const productFilterd = products.filter((product) => product.id !== id);// push
    const currentProduto = { produto, id, imagem, preco, quantity };
    productFilterd.push(currentProduto);
    setSale({
      ...sale, products: productFilterd,
    });
  };

  console.log(sale);
  return (
    <div>
      <div className="relative side-menu-container flex flex-col space-y-16 items-center">
        <h5 data-testid="0-product-price">
          R$
          {preco}
        </h5>
        <img
          src={ imagem }
          alt={ produto }
          className="mx-auto h-24 w-24 w-auto"
          data-testid="0-product-img"
        />
        <h4 data-testid="0-product-name">{produto}</h4>
      </div>
      <div className="relative side-menu-container flex justify-center items-center">
        <button
          type="button"
          onClick={ () => handleClickPlus() }
          data-testid="0-product-plus"
        >
          <FaIcons.FaPlusSquare />
        </button>
        <h2 data-testid="0-product-qtd">{quantity}</h2>
        <button
          type="button"
          onClick={ () => handleClickMinus() }
          data-testid="0-product-minus"
        >
          <FaIcons.FaMinusSquare />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  produto: PropTypes.shape({
    imagem: PropTypes.string.isRequired,
    produto: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    prevQuantity: PropTypes.number.isRequired,
  }).isRequired,
};
export default Card;
