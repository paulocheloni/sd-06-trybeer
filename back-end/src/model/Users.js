const connection = require('./connection');

exports.getAll = async () =>
  connection.execute('SELECT * FROM users;').then(([user]) => user);

exports.getByEmail = async (email) => (
  connection
    .execute('SELECT * FROM users WHERE email = ?', [email])
    .then(([[user]]) => user || null)
);

exports.create = async ({ email, password, role }) =>
  connection
    .execute('INSERT INTO users (email, password) VALUES (?)', [
      email,
      password,
    ])
    .then(([result]) => ({ id: result.insertId, email, password, role }));
