const { endpoint } = require('./utils');

const applicationJsonContent = 'application/json';

const getAdminSaleDetails = (id) => fetch(`${endpoint}/sales/admin/details/${id}`).then(response => response.json())

module.exports = {
  getAdminSaleDetails
}