const mysql = require('mysql2/promise');
require('dotenv/config');

const connection = mysql.createPool({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'Trybeer',
});

module.exports = connection;