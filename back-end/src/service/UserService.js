const Users = require('../model/Users');

exports.getAll = async () => Users.getAll();

exports.getByEmail = async (email) => Users.getByEmail(email);

exports.create = async (user) => Users.create(user);
