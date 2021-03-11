const express = require('express');
const Rescue = require('express-rescue');
const { handleError } = require('./src/middlewares');
const routes = require('./src/routes')
// const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use('/', Rescue(routes)) 
app.use(handleError);

app.listen(port, () => console.log('Port Running'));
