const { utils, admin } = require('../models');
const { authStatusUpdate } = require('../schemas');

const getAll = async () => utils.getAll('sales');

const getSaleById = async (id) => {
  const [sale] = await admin.querySaleById(id);
  return sale;
};

const updateSaleStatus = async (saleId, boolean) => {
  authStatusUpdate(saleId, boolean);
  const status = (boolean) ? 'Entregue' : 'Pendente';
  return admin.updateSaleStatus(status, saleId);
};

module.exports = {
  getAll,
  getSaleById,
  updateSaleStatus,
};
