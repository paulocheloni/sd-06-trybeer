import React, { useEffect, useState } from 'react';
import fetchProducts from '../methods/products';
import './Products.css';

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);

  useEffect(() => {
    const renderProd = async () => {
      setAllProducts(await fetchProducts());
    };
    renderProd();
  }, []);
  const renderCards = () => allProducts.map((prod, id) => (
    <section className="card-content" key={ id }>
      <p>{prod.price}</p>
      <img className="products-img" src={ prod.url_image } alt="Foto do Produto" />
      <h4>{prod.name}</h4>
      <section className="cards-btn">
        <button
          type="button"
          onClick={ () => {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.push(prod);
            localStorage.setItem('items', JSON.stringify(items));
          } }
        >
          +
        </button>
        <p>{0}</p>
        <button
          type="button"
          onClick={ () => {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.splice(items.indexOf(items.find((e) => e.id === prod.id)), 1);
            localStorage.setItem('items', JSON.stringify(items));
          } }
        >
          -
        </button>
      </section>
    </section>
  ));
  return (
    <>
      <h1>Products</h1>
      <section className="cards-container">
        {renderCards()}
      </section>
    </>
  );
}

export default Products;
