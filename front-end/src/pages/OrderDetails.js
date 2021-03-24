import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import AppContext from '../context/app.context';
import { Topbar, Loading } from '../components';

export default function OrderDetails() {
  const { tokenContext: { token } } = useContext(AppContext);
  const [order] = useState();

  // useEffect(() => {
  //   const magicTime = 100;
  //   const fetchProducts = async () => {
  //     const productsArray = await productsApi(token).catch((error) => error);
  //     setTimeout(() => setProducts(productsArray), magicTime);
  //     // setProducts(productsArray);
  //   };
  //   fetchProducts();
  // }, [setOrder, token]);

  if (!token) return <Redirect to="/login" />;

  return (!order)
    ? <Loading />
    : (
      <section>
        <Topbar title="Detalhes de Pedido" />
        { order.total_price }
      </section>
    );
}
