const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection 
    .execute('SELECT * FROM sales');
  return sales;
};

const create = async (USER_ID, TOTAL_PRICE, DELIVERY_ADDRESS, DELIVERY_NUMBER) => {
  const sale = await connection
    .execute(`INSERT INTO sales
    (user_id, total_price, delivery_address, delivery_number, sale_date, status)
    VALUES (?, ?, ?, ?, SYSDATE(), ?)`,
    [USER_ID, TOTAL_PRICE, DELIVERY_ADDRESS, DELIVERY_NUMBER, 'Pendente']);
  return sale[0]['insertId'];
};

const insertSaleProduct = async (SALE_ID, PRODUCT_ID, QUANTITY) => {
  await connection
    .execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?,?,?)',
    [SALE_ID, PRODUCT_ID, QUANTITY]);
}

module.exports = { getAll, create, insertSaleProduct };
