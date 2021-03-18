import React, { useContext, useState } from 'react';
import './ProductCard.css';
import productsContext from '../context/productsContext';

export default function ProductsCard() {
  const { products, cartProducts, setCartProducts } = useContext(productsContext);
  const [totalValue] = useState(0);

  const funcao = (index) => {
    const productFound = cartProducts.find((item) => item.id === index);
    if (productFound) {
      console.log(productFound.quantityItem);
      return productFound.quantityItem;
    }
    return 0;
  };

  const handlePlusButton = (event) => {
    const productId = event.target.id;
    if (!cartProducts.length) {
      setCartProducts([{
        id: parseInt(productId, 10),
        name: products[productId].name,
        price: products[productId].price,
        url: products[productId].url_image,
        quantityItem: 1,
        subTotal: products[productId].price,
      }]);
    }

    const productExists = cartProducts
      .some((product) => parseInt(product.id, 10) === parseInt(productId, 10));

    if (productExists) {
      setCartProducts(cartProducts.map((product) => {
        product.quantityItem += 1;
        product.subTotal = product.quantityItem * product.price;
        return product;
      }));
    } else {
      setCartProducts([...cartProducts, {
        id: parseInt(productId, 10),
        name: products[productId].name,
        price: products[productId].price,
        url: products[productId].url_image,
        quantityItem: 1,
        subTotal: products[productId].price,
      }]);
    }
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
              { product.price }
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
                onClick={ handlePlusButton }
                value="Plus"
                id={ index }
              >
                +
              </button>
              <span>
                { funcao(index) }
              </span>
              <button
                className="button"
                type="button"
                data-testid={ `${index}-product-minus` }
                onClick={ handlePlusButton }
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
