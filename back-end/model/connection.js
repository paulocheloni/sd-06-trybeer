const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'Bellaisa2306!',
  host: 'localhost',
  database: 'Trybeer'
})

module.exports = connection;
