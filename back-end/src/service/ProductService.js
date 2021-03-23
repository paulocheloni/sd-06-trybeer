const Products = require('../model/Products');

exports.getAll = async () => Products.getAll();
exports.getByName = async (name) => Products.getByName(name);
