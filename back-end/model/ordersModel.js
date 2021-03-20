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
  console.log('pedidos model', sales);
  return sales;
};

/* const createProductsSales = async ({ productId, quantity }) => {
  await connection.execute(
    'INSERT INTO Trybeer.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
    [productId, quantity],
  );
}; */

module.exports = {
  createOrders,
  getOrders,
  // createProductsSales,
};
