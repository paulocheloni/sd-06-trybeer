const mysql = require('mysql2/promise');

console.log(process.env.MYSQL_USER);
const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
});

module.exports = connection;
