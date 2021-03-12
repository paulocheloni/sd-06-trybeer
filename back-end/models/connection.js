require('dotenv/config');
const mysql = require('mysql2/promise');

const { HOSTNAME, MYSQL_USER, MYSQL_PASSWORD } = process.env;

module.exports = mysql.createPool({
  host: HOSTNAME,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: 'Trybeer',
});
