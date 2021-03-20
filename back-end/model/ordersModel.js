const connection = require('./connection');

// const salesColumns = 'user_id, total_price, delivery_address, delivery_number, sale_date, status';

const createOrders = async (userId, objOrder) => {
  try {
    console.log('cheguei no del', objOrder, userId);
    await connection.execute('INSERT INTO Trybeer.sales ' 
      + '(id, user_id, total_price, delivery_address, delivery_number, sale_date, status) ' 
      + 'VALUES (?,?,?,?,?,?,?)', [
      1,
      userId,
      objOrder.totalPrice,
      objOrder.address,
      objOrder.number,
      objOrder.date,
      objOrder.status,
    ]);
  } catch (error) {
    console.error(error);
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
