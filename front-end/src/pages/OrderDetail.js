import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { getByIdSales } from '../api/axiosApi';

export default function OrderDetail() {
  const history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const localStorageProfile = JSON.parse(localStorage.getItem('user'));
    if (!localStorageProfile) {
      history.push('/login');
    }
  }, [history]);

  useEffect(() => {
    const findByID = async () => {
      const result = await getByIdSales(id);
      setProduct(result);
    };
    findByID();
  }, [id]);

  function formatDate(date) {
    const TEN = 10;
    const newDate = new Date(date);
    let month = newDate.getMonth() + 1;
    if (month < TEN) {
      month = `0${month}`;
    }
    return `${newDate.getDate()}/${month}`;
  }

  return (
    <>
      <Header />
      <Navbar />
      {
        (product)
          ? product.map((el, index) => (
            <div key={ index }>
              <h4
                data-testid="order-number"
              >
                {`Pedido ${index + 1}`}
              </h4>
              <p
                data-testid="order-date"
              >
                { formatDate(el.sale_date) }
              </p>
              <p
                data-testid={ `${index}-product-qtd` }
              >
                { el.quantity }
              </p>
              <p
                data-testid={ `${index}-product-name` }
              >
                { el.name }
              </p>
              <p
                data-testid={ `${index}-product-total-value` }
              >
                {`R$ ${el.price.replace('.', ',')}`}
              </p>
              <p
                data-testid="order-total-value"
              >
                {`R$ ${el.total_price.replace('.', ',')}`}
              </p>

            </div>
          ))

          : <h1> teste</h1>
      }
    </>
  );
}
