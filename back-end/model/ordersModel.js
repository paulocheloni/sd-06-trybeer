const connection = require('./connection');

// const salesColumns = 'user_id, total_price, delivery_address, delivery_number, sale_date, status';

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

/* const createProductsSales = async ({ productId, quantity }) => {
  await connection.execute(
    'INSERT INTO Trybeer.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
    [productId, quantity],
  );
}; */

module.exports = {
  createOrders,
  // createProductsSales,
};
