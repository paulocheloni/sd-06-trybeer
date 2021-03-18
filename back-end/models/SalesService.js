const connection = require('./connection');

const createOne = async (data) => {
  const { userId, price, address, number, status } = data;
  console.log(userId, price, address, number, status);
  try {
    const [products] = await connection.execute('SELECT * FROM products;');
    console.log(products);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createOne,
};

// 'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES(?, ?, ?, ?, ?, ?)',
      // [userId, price, address, number, Date.now(), status],