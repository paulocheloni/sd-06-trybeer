const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybeer.products',
  );
  return products;
};

// const getProductById = async (productId) => {
//   // console.log('entrei no model', saleId);
//   const [productById] = await connection.execute(
//       'SELECT * FROM Trybeer.products WHERE id=?', [productId],
//   );
//   // console.log('resposta do meu model by id', saleById);
//   return productById;
// };

module.exports = {
  getAllProducts,
  // getProductById,
};
