const connection = require('./connections');

const allOrdersAdmin = async () => {
  try {
    await connection.execute('SELECT * FROM sales');
  } catch (e) {
    return 'erro interno';
  }
};

module.exports = allOrdersAdmin;