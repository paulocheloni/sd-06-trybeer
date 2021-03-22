import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import { getAdminSaleDetails,fullfilSale } from '../../../services/Sales'
import capitalize from '../../../utils/capitalize'
import { parseCartPrice } from '../../../utils/parseValues'
import './AdminOrdersDetail'

export default function AdminOrdersDetail({ match: { params: { id } } }) {
  const [saleDetails, setSaleDetails] = useState({});


  useEffect(() => {
    const fetchSale = async () => {
      const sale = await getAdminSaleDetails(id)
      setSaleDetails(sale);
    }
    fetchSale()
  }, [id])

  const fullfilOrder = async () => {
    const newState = {...saleDetails, sale: { ...saleDetails.sale, status: 'entregue'}}
    setSaleDetails(newState);
    await fullfilSale(id)

  }

  const { saleProducts, sale } = saleDetails

  return (
    
    <div>
      <Header title="TryBeer" user="admin" />
      {saleProducts && (
      <>
      <h1>
        <span data-testid="order-number">{`Pedido 00${id}`} - </span>
        <span data-testid="order-status">{sale && capitalize(sale.status)}</span>
        </h1>
      <div className="sale-details">
        <ul>
          {saleProducts.map(({quantity, name, price}, index) => (
            <li>
              <span data-testid={`${index}-product-qtd`}>{quantity} - </span>
              <span data-testid={`${index}-product-name`}>{name} - </span>
              <span data-testid={`${index}-product-unit-price`}>{parseCartPrice(price)} - </span>
              <span data-testid={`${index}-product-total-value`}>{parseCartPrice(price * quantity)}</span>
            </li>
          ))}
        </ul>
        <h2 data-testid="order-total-value">
          {sale && parseCartPrice(sale.total_price)}
        </h2>
      </div>
      {sale && sale.status === 'pendente' && <button
        type="button"
        data-testid="mark-as-delivered-btn"
        onClick={fullfilOrder}
      >
        Marcar como entregue
        </button>
      }
      </>  
      )}
    </div>
  );
}
