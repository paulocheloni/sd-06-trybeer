const connection = require('./connection');

const createSale = async (
  user_id, 
  total_price, 
  delivery_address, 
  delivery_number, 
  sale_date, 
  status) => {
  const [response] = await connection
    .execute('INSERT INTO sales(user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, ?, ?)', 
    [user_id, 
      total_price, 
      delivery_address, 
      delivery_number, 
      sale_date, 
      status]);
  return response;
}

module.exports = {
  createSale,
}
