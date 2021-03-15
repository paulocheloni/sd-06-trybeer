/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from '../methods/products';
// import renderCards from '../components/RenderCards';
import './Products.css';

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [chartTotal, setChartTotal] = useState(0);
  const [asd, setAsd] = useState(0);

  useEffect(() => {
    (async () => {
      setAllProducts(await fetchProducts());
    })();
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      const ad = items.map((a) => a.price);
      setChartTotal(ad.reduce((e, f) => +e + +f));
    }
  }, [asd]);

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
            setAsd(asd + 1);
          } }
        >
          +
        </button>
        <p>0</p>
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
        <Link to="/chart">
          {chartTotal}
        </Link>
      </section>
    </>
  );
}
export default Products;
