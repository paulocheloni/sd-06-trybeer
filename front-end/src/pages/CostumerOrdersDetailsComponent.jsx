import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Header } from '../components';
import CostumerOrdersDetailsCards from '../components/CostumerOrdersDetailsCards';
import BeersAppContext from '../context/BeersAppContext';

function CostumerOrdersDetails() {
  const history = useHistory();
  const { id } = useParams();
  const {
    user,
  } = useContext(BeersAppContext);

  if (!user.token) history.push('/login');

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/orders/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: user.token,
      },
    }).then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  const totalPrice = orders
    .reduce((total, element) => {
      const price = parseFloat(total) + parseFloat(element.productPrice);
      return price.toFixed(2);
    }, 0);

  const parseDate = (saleDate) => {
    const dateAsString = new Date(saleDate);
    const dateOk = dateAsString.toLocaleDateString('pt-BR');
    const five = 5;
    const justMonthAndYear = dateOk.substring(0, five);
    return justMonthAndYear;
  };

  const date = () => {
    if (orders.length !== 0) {
      const { saleDate } = orders[0];
      return parseDate(saleDate);
    }
    return '';
  };

  const commaAmount = (price) => `${price}`.replace('.', ',');

  return (
    <>
      <Header text="Detalhes de Pedido" data-testid="top-title" />
      <div className="order-list">
        <h1 data-testid="order-number">{`Pedido ${id}`}</h1>
        <h1 data-testid="order-date">{ date() }</h1>
        {orders.map((element, index) => (
          <div key={ index }>
            <CostumerOrdersDetailsCards
              element={ element }
              index={ index }
            />
          </div>
        ))}
        <p data-testid="order-total-value">{`Total: R$ ${commaAmount(totalPrice)}`}</p>
      </div>
    </>
  );
}

export default CostumerOrdersDetails;
