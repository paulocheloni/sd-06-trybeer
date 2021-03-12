const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'comments',
  port: '3306',
});