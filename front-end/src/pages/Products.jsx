import React, { useEffect, useState } from 'react';
import fetchProducts from '../methods/products';

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);
  useEffect(() => {
    const renderProd = async () => {
      setAllProducts(await fetchProducts());
    };
    renderProd();
  }, []);

  const renderCards = () => allProducts.map((e, id) => (
    <section key={ id }>
      <h1>{e.name}</h1>
      <h2>{e.price}</h2>
      <img src={ e.url_image } alt="Foto do Produto" />
    </section>
  ));

  return (
    <>
      <h1>Products</h1>
      {renderCards()}
    </>
  );
}

export default Products;
