const Products = require('../model/Products');

exports.getAll = async () => Products.getAll();
exports.getByName = async (name) => Products.getByName(name);
exports.create = async (name, price, url_image) => (
  Products.create(name, price, url_image)
);
