const { endpoint } = require('./utils');

const getAdminSaleDetails = (id) => fetch(`${endpoint}/sales/admin/details/${id}`).then(response => response.json())

const fullfilSale = (id) => fetch(`${endpoint}/sales/admin/details/${id}`, {
  method: 'put'
}).then(response => response.json())

module.exports = {
  getAdminSaleDetails,
  fullfilSale
}