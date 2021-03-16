const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/userController');
const changeNameController = require('./controllers/changeNameController');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', userController, changeNameController);

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
