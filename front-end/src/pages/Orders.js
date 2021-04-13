import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getSales } from '../api/axiosApi';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function Order() {
  const history = useHistory();
  const [saleList, setSaleList] = useState([]);

  useEffect(() => {
    const execute = async () => {
      let salesDB = await getSales();
      salesDB = salesDB.map((sale) => (sale));
      setSaleList(salesDB);
      localStorage.setItem('sales', JSON.stringify(salesDB));
    };
    execute();
  }, [setSaleList]);

  useEffect(() => {
    const localStorageProfile = JSON.parse(localStorage.getItem('user'));
    // console.log(localStorageProfile);
    if (localStorageProfile === null) {
      history.push('./login');
    }
  }, [history]);

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
    <div>
      <Header />
      <Navbar />
      <div data-testid="0-order-card-container">
        {saleList.length > 0 && saleList.map((e, index) => (
          <ul key={ index }>
            <li>
              <div>
                <button
                  type="button"
                  data-testid={ `${index}-order-number` }
                  onClick={ () => history.push(`/orders/${index + 1}`) }
                  // onClick={ () => getByIdSales(index + 1) }
                >
                  {`Pedido ${index + 1}`}
                </button>
                <h5 data-testid={ `${index}-order-date` }>
                  {formatDate(e.sale_date)}
                </h5>
                <p data-testid={ `${index}-order-total-value` }>
                  {`R$ ${e.total_price.replace('.', ',')}`}
                </p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
