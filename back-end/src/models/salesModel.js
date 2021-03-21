const connection = require('./connection');

/**
 * Lista todos os itens de venda relacionado com vendas, produtos, clientes;
 * @returns lista de todas as vendas ordenadas pela venda e nome do produto 
 */
const getAllSales = async () => {
  const result = connection.execute(
    'select',
    'sales_products.product_id as idProduct,',
    'sales_products.quantity as quantity,',
    'sales.id as idSales,',
    'sales.sale_date as dateSale,',
    'products.name as productName,',
    'products.price as price',
    'from sales_products',
    'inner join sales on sales_products.sale_id = sales.id',
    'inner join products on sales_products.product_id = products.id',
    'Order by productName;'
  );
  return result;
}

/**
 * Lista detalhes da venda filtrado pelo id
 * @param {String} id 
 * @returns Objeto contendo itens de venda detalhado
 */
const getSalesById = async (id) => {
  const result = connection.execute(
    'select',
    'sales_products.product_id as idProduct,',
    'sales_products.quantity as quantity,',
    'sales.id as idSales,',
    'sales.sale_date as dateSale,',
    'products.name as productName,',
    'products.price as price',
    'from sales_products',
    'inner join sales on sales_products.sale_id = sales.id',
    'inner join products on sales_products.product_id = products.id',
    'WHERE idSales=?',
    'Order by productName;'
  ), [id];
  return result;
}

module.exports = {
  getAllSales,
  getSalesById
}
