import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProductCard.css';
import productsContext from '../context/productsContext';

export default function ProductsCard() {
  const { products, cartProducts, setCartProducts } = useContext(productsContext);
  const [totalValue] = useState(0);
  const history = useHistory();

  const MINUSONE = -1;
  const ONE = 1;

  const isCartWithoutProducts = () => {
    if (cartProducts.length) {
      return false;
    }
    return true;
  };

  const showQuantity = (index) => {
    const productExists = cartProducts
      .find((product) => parseInt(product.id, 10) === parseInt(index, 10));
    if (productExists) { return productExists.quantityItem; }

    return 0;
  };

  const handleChangeQuantityButton = (event, unity) => {
    const productId = event.target.id;
    const productExists = cartProducts
      .find((product) => parseInt(product.id, 10) === parseInt(productId, 10));

    if (cartProducts.length && productExists) {
      return setCartProducts(cartProducts.map((product) => {
        if (product.id !== Number(productId)) {
          return product;
        }
        product.quantityItem += unity;
        if (product.quantityItem <= 0) {
          product.quantityItem = 0;
        }
        product.subTotal = (product.quantityItem * product.price).toFixed(2);
        return product;
      }));
    }

    setCartProducts([...cartProducts, {
      id: parseInt(productId, 10),
      name: products[productId].name,
      price: products[productId].price,
      url: products[productId].url_image,
      quantityItem: unity > 0 ? unity : unity = 0,
      subTotal: products[productId].price,
    }]);
  };

  return (
    <div className="products-container">
      { products.length && products.map((product, index) => (
        <div
          className="product-card"
          key={ index }
        >
          <div className="card-body">
            <p data-testid={ `${index}-product-price` }>
              { `R$ ${product.price}` }
            </p>
            <img
              data-testid={ `${index}-product-img` }
              src={ product.url_image }
              alt="Imagem do produto"
              width="50px"
            />
            <h5 className="card-title" data-testid={ `${index}-product-name` }>
              { product.name }
            </h5>
            <div className="quantity-control">
              <button
                className="button"
                type="button"
                data-testid={ `${index}-product-plus` }
                onClick={ (e) => handleChangeQuantityButton(e, ONE) }
                value="Plus"
                id={ index }
              >
                +
              </button>
              <span
                data-testid={ `${index}-product-qtd` }
              >
                { showQuantity(index) }
              </span>
              <button
                className="button"
                type="button"
                data-testid={ `${index}-product-minus` }
                onClick={ (e) => handleChangeQuantityButton(e, MINUSONE) }
                value="Minus"
                id={ index }
              >
                -
              </button>
            </div>
          </div>
        </div>))}
      <div>
        <button
          className="btn btn-primary"
          type="button"
          data-testid="checkout-bottom-btn"
          disabled={ isCartWithoutProducts() }
          onClick={ () => { history.push('/mycart'); } }
        >
          Ver Carrinho
        </button>
        <span data-testid="checkout-bottom-btn-value">
          { `R$ ${(totalValue).toFixed(2)}` }
        </span>
      </div>
    </div>
  );
}
