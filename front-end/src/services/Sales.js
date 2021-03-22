const { endpoint } = require('./utils');

const applicationJsonContent = 'application/json';

const postSale = (token, payload) => fetch(`${endpoint}/sales/checkout`, {
  method: 'post',
  headers: {
    'Content-type': applicationJsonContent,
    authorization: token,
  },
  body: JSON.stringify(payload),
})
  .then((response) => response.json());

const getSales = () => fetch(`${endpoint}/sales`)
  .then((response) => response.json());


const getAdminSaleDetails = (id) => fetch(`${endpoint}/sales/admin/details/${id}`).then(response => response.json())

module.exports = {
  getAdminSaleDetails,
  getSales,
  postSale,
}
