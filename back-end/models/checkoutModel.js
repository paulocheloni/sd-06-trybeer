const connection = require('./connections');

const checkOrders = async (sale) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = sale;
  try {
    return await connection
      .execute('INSERT INTO sales (user_id, total_price, delivery_address,'
        + 'delivery_number, sale_date,status) VALUES (?,?,?,?,?,?)',
        [userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status]);
  } catch (e) {
    return 'erro interno';
  }
};

module.exports = checkOrders;