const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Rescue = require('express-rescue');
const { handleError } = require('./src/middlewares');
const routes = require('./src/routes');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use('/', Rescue(routes));
app.use(handleError);

app.listen(port, () => console.log('Port Running'));
