import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export default function OrderDetails() {
  const [productsOfSale, setProductsOfSale] = useState([]);
  const { id } = useParams();
  const fetchApiProductOfSale = async(id) => {
    const productDetails = await api.fetchSaleProduct(id);
    setProductsOfSale(productDetails);
  };

  const seventeen = -17;
  const five = 5;
  const eigth = 8;
  const fourteen = -14;

  const formatDate = (date) => {
    const month = date.slice(five, seventeen);
    const day = date.slice(eigth, fourteen);

    return `${day}/${month}`;
  };


  useEffect(() => {
    fetchApiProductOfSale();
  }, []);

  return (
    <div>
      <h1>Detalhes de Pedido</h1>
      <h2>
        Pedido {id}
      </h2>
      <h2>
        {/* {productsOfSale.length !== 0 && formatDate(productsOfSale[0].sale_date)} */}
        {console.log(productsOfSale)}
      </h2>
    </div>
  );
}
