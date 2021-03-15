const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const userController = require('./controllers/userController');

app.use('/', userController);

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
