import React, { useContext } from 'react';
import AdminSideBar from '../components/AdminSideBar';
import BeerContext from '../context/BeerContext';
import ProductCardAdmin from '../components/ProductCardAdmin';
import { updateStatusSale, getSalesProductsBySaleId } from '../api/index';
// import '../css/General.css';
// import '../css/AdminOrders.css';

function AdminDetailsOrder() {
  const { saleDetail, setSaleDetail } = useContext(BeerContext);
  const { sale, products } = saleDetail;

  const handleClick = () => {
    async function updateStatus() {
      await updateStatusSale('Entregue', sale.saleId);
    }
    async function getSaleDetail() {
      await getSalesProductsBySaleId(setSaleDetail, sale.saleId);
    }
    updateStatus();
    getSaleDetail();
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <div className="admin-container-detail">
        <div>
          <h1>Admin Detail</h1>
        </div>
        { !saleDetail ? <p>Loading</p> : (
          <div>
            <div>
              <spam data-testid="order-number">{`Pedido ${sale.saleId}`}</spam>
              <spam data-testid="order-status">{` - ${sale.saleStatus}`}</spam>
            </div>
            <section className="orders-list">
              { products && products
                .map((prod, index) => (<ProductCardAdmin
                  key={ index }
                  product={ prod }
                  index={ index }
                />
                ))}
            </section>
            <p
              data-testid="order-total-value"
            >
              {`Total: R$ ${sale.saleTotal.replace('.', ',')}`}
            </p>
            { sale.saleStatus === 'Pendente' && (
              <button
                type="button"
                onClick={ () => handleClick() }
                data-testid="mark-as-delivered-btn"
                // className="button"
              >
                Marcar como entregue
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDetailsOrder;
