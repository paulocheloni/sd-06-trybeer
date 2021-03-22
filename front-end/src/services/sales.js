const { endpoint } = require('./utils');

const getAllSales = () => fetch(`${endpoint}/orders`)
  .then((response) => response.json());

const getSalesById = (id) => fetch(`${endpoint}/orders/:id`)
  .then((response) => response.json());

module.exports = {
  getAllSales,
  getSalesById
}

