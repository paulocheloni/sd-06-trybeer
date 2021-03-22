import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import { getAdminSaleDetails } from '../../../services/Sales'

export default function AdminOrdersDetail({ match: { params: { id } } }) {
  const [sale, setSale] = useState({});

  console.log(sale)

  useEffect(() => {
    const fetchSale = async () => {
      const saleDetails = await getAdminSaleDetails(id)
      setSale(saleDetails);
    }

    fetchSale()
  }, [])

  return (
    <div>
      <Header title="TryBeer" user="admin" />
    </div>
  );
}
