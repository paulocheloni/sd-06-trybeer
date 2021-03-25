import React, { useContext, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import AppContext from '../context/app.context';
import { Topbar, Loading } from '../components';
import salesApi from '../services/api.sales';
import { convertDate } from '../utils';

export default function OrderDetails() {
  const {
    tokenContext: { token },
    productsContext: { products } } = useContext(AppContext);
  const params = useParams();
  const [order, setOrder] = useState();

  const calcProductTotal = (productId, quantity) => (
    (products.find((el) => el.id === productId).price * quantity).toFixed(2)
  );

  const getProductName = (productId) => products.find((el) => el.id === productId).name;

  useEffect(() => {
    const magicTime = 100;
    const fetchOrder = async () => {
      const orderArray = await salesApi({
        ...token,
        saleId: params.id,
      }).catch((error) => error);
      setOrder(orderArray);
    };
    const timeOut = setTimeout(() => fetchOrder(), magicTime);
    return () => {
      clearTimeout(timeOut);
    };
  }, [setOrder, params, token]);

  if (!token) return <Redirect to="/login" />;

  return (
    <section>
      <Topbar title="Detalhes de Pedido" />
      { (!order)
        ? <Loading />
        : (
          <>
            <h3 data-testid="order-number">{ `Pedido ${order.id}` }</h3>
            <p data-testid="order-date">{ convertDate(order.sale_date)[0] }</p>
            { order.sale.map((curr, index) => (
              <section key={ index }>
                <p data-testid={ `${index}-product-qtd` }>
                  { curr.quantity }
                </p>
                <p data-testid={ `${index}-product-name` }>
                  { getProductName(curr.product_id) }
                </p>
                <p data-testid={ `${index}-product-total-value` }>
                  { `R$ ${calcProductTotal(curr.product_id, curr.quantity)
                    .replace('.', ',')}` }
                </p>
              </section>
            )) }
            <p data-testid="order-total-value">
              { `Total: R$ ${order.total_price.replace('.', ',')}` }
            </p>
          </>
        ) }
    </section>
  );
}
