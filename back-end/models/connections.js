require('dotenv').config();
const mysql = require('mysql2/promise')

const config = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
});
console.log('connection', process.env.MYSQL_PASSWORD);

module.exports = config;
