const connection = require('./connection');

exports.getAll = async (userId) =>
  connection.execute(
    'SELECT id, sale_date, total_price FROM sales WHERE user_id = ?',
    [userId],
  )
  .then(([sale]) => sale);
