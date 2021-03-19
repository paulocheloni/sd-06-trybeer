const { utils, admin } = require('../models');

const getAll = async () => utils.getAll('sales');

const getSaleById = async (id) => {
  const [sale] = await admin.querySaleById(id);
  return sale;
};

const changeSaleStatus = async (id, boolean) => {
  const status = (boolean) ? 'Entregue' : 'Pendente';
  await admin.updateSaleStatus(status, id);
  return { status };
};

module.exports = {
  getAll,
  getSaleById,
  changeSaleStatus,
};
