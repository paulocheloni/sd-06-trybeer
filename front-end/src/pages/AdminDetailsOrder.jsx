import React, { useContext } from 'react';
import BeerContext from '../context/BeerContext';
import ProductCardAdmin from '../components/ProductCardAdmin';

function AdminDetailsOrder() {
  const { saleDetail } = useContext(BeerContext);
  const { sale, products } = saleDetail;

  return (
    <div>
      <h1>Admin Detail</h1>
      { !saleDetail ? <p>Loading</p> : (
        <div>
          <div>
            <spam data-testid="order-number">{`Pedido ${sale.saleId}`}</spam>
            <spam data-testid="order-status">{` - ${sale.saleStatus}`}</spam>
          </div>
          <section className="list">
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
        </div>
      )}
    </div>
  );
}

export default AdminDetailsOrder;
