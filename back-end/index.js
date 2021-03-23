const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Rescue = require('express-rescue');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { handleError } = require('./src/middlewares');
const routes = require('./src/routes');

const app = express();
const port = 3001;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());
app.use('/', Rescue(routes));
app.use(handleError);

app.listen(port, () => console.log('Port Running'));
