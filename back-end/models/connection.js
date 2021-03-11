require('dotenv').config();
const mysql = require('mysql2/promise');

// const { HOSTNAME, MYSQL_USER, MYSQL_PASSWORD } = process.env

// // MySQL Connection
// module.exports = mysql.createPool({
//   host: HOSTNAME,
//   user: MYSQL_USER,
//   password: MYSQL_PASSWORD,
//   database: 'Trybeer',
// })

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'B@hrein8018',
  database: 'Trybeer' });

module.exports = connection;