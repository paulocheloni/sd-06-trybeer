import React, { useState } from 'react';
import SideBarAdmin from '../components/SideBarAdmin';
import './Admin.css';

function ProductAdminInsert() {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
  });

  function handleChange(event) {
    console.log(event.target);
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="div-main">
      <SideBarAdmin />
      <div className="div-filha">
        <h1 className="title">Admin Orders</h1>
        <label htmlFor="product-name">
          Nome do produto
          <input
            id="product-name"
            type="text"
            name="name"
            placeholder="Nome do produto"
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <label htmlFor="product-name">
          Preço
          <input
            id="product-price"
            type="number"
            name="price"
            placeholder="Preço"
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <label htmlFor="product-image">
          Imagem do produto
          <input
            id="product-image"
            type="file"
            name="image"
          />
        </label>
      </div>
    </div>
  );
}

export default ProductAdminInsert;
