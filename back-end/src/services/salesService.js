const salesService = require('../models/salesModel');

/**
 * Lista todas as vendas com detalhes
 * @returns Object contento lista das vendas com produtos
 */
const getAllSales = async() => {
  const result = salesService.getAllSales();
  return result;
}

/**
 * Lista venda detalhada filtrada  pelo id da venda
 * @param {String} id 
 * @returns Object contendo detalhes da venda
 */
const getSalesById = async (id) => {
  const result = salesService.getSalesById(id);
  return result;
}

module.exports = {
  getAllSales,
  getSalesById
}
