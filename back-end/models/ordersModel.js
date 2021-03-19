const connection = require('./connections');

const getOrder = async (userId) => {
  try {
    return await connection
      .execute('SELECT id, total_price, sale_date FROM sales WHERE user_id=?', [userId]);
  } catch (e) {
    return 'erro interno';
  }
};

module.exports = getOrder;