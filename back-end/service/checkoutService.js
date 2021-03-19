const { checkOrders, insertSaleProducts } = require('../models/checkoutModel');

const OrdersDone = async (sale) => await checkOrders(sale);
// pegar valor id
/*const insertSales = (saleInfo, products) => {
  const result = OrdersDone(sale);// pode ter o id.
  const saleId = findLastSale(); // pegaria a ultima venda.
  insertSaleProducts(saleId, products);
}*/
const salesProduct = async (id, product_id, quantity) => await insertSaleProducts(id, product_id, quantity);

module.exports = { OrdersDone, salesProduct };