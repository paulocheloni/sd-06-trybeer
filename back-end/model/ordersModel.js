const connection = require('./connection');

const createOrders = async (userId, objOrder) => {
  try {
    await connection.execute('INSERT INTO Trybeer.sales ' 
      + '(user_id, total_price, delivery_address, delivery_number, sale_date, status) ' 
      + 'VALUES (?,?,?,?,?,?)', [
      userId,
      objOrder.totalPrice,
      objOrder.address,
      objOrder.number,
      objOrder.date,
      objOrder.orderStatus,
    ]);
  } catch (error) {
    console.error(error.message);
  }
};

const getOrders = async (userId) => {
  const [sales] = await connection.execute(
    'SELECT * FROM Trybeer.sales WHERE user_id=?', [userId],
  );
  return sales;
};

const getLastSaleId = async () => {
  const [[lastSaleId]] = await connection.execute(
    'SELECT MAX(id) lastSaleId FROM Trybeer.sales',
  );
  return lastSaleId;
};

const createProductsSales = async (productData) => {
  try {
    await connection.execute(
      'INSERT INTO Trybeer.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)', [
        productData.saleId,
        productData.productId,
        productData.quantity,
      ],
    );
  } catch (error) {
    console.error(error.message);
  }
};

const getSaleById = async (saleId) => {
  // console.log('entrei no model', saleId);
  const [saleById] = await connection.execute(
      'SELECT * FROM Trybeer.sales WHERE id=?', [saleId],
  );
  // console.log('resposta do meu model by id', saleById);
  return saleById;
};

const getSaleProductById = async (saleId) => {
  // console.log('entrei no model', saleId);
  const [saleProductById] = await connection.execute(
      'SELECT * FROM Trybeer.sales_products WHERE sale_id=?', [saleId],
  );
  // console.log('resposta do meu model by id', saleProductById);
  return saleProductById;
};

module.exports = {
  createOrders,
  getOrders,
  getLastSaleId,
  createProductsSales,
  getSaleById,
  getSaleProductById,
};
