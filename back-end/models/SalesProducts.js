const moment = require('moment');
const connection = require('./connection');

const getOne = async (saleId) => {
  const [sale] = await connection.execute(
    'SELECT (s.id as id, s.total_price as saleTotal, , '
    + 'p.price as productPrice, sD.quantity as productQuantity,'
     + 'p.name as productName, s.sale_date as saleDate ) '
     + 'FROM sale_products as sD  INNER JOIN sales as s ON salesDetails.id = s.id'
     + 'INNER JOIN products as p ON saleDetails.product_id = p.product_id'
     + 'WHERE s.id = ?', [saleId],
  );
  return sale;
};

const createOne = async (saleProductData, saleDetailsData) => {  
  const productDetailsQuery = 'INSERT INTO sale_products (product_id, quantity) VALUES ?'; 
  const saleDetailsQuery = 'INSERT INTO sales' 
  + '(user_id, total_price, delivery_address, delivery_number, sale_date, status)'
  + 'VALUES(?, ?, ?, ?, ?, ?)';  
  const query = `${productDetailsQuery}${saleDetailsQuery}`;  
  const productDetailsValues = (
    saleProductData.map((product) => [product.productId, product.quantity]));  
  const { userId, price, address, number, status } = saleDetailsData;
  const date = moment().format('YYYY-MM-DD HH:mm:ss');
  const [saleProductDetails, saleDetails] = await connection.execute(query,
    [productDetailsValues, userId, price, address, number, date, status]);
  return [saleProductDetails, saleDetails];
};

module.exports = {
  getOne, createOne,
};