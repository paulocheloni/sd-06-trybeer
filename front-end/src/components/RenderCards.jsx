import React from 'react';

const renderCards = (allProducts, asd, setAsd, itemQty) => {
  const disabledBtnQty = (prod) => itemQty(prod) === 0;
  return allProducts.map(
    (prod, id) => (
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
          <p>{itemQty(prod)}</p>
          <button
            type="button"
            disabled={ disabledBtnQty(prod) }
            onClick={ () => {
              const items = JSON.parse(localStorage.getItem('items')) || [];
              items.splice(items.indexOf(items.find((e) => e.id === prod.id)), 1);
              localStorage.setItem('items', JSON.stringify(items));
              setAsd(asd - 1);
            } }
          >
            -
          </button>
        </section>
      </section>
    ),
  );
};
export default renderCards;
