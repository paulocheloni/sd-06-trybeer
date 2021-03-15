const express = require('express');
const cors = require('cors');
const RegisterRouter = require('./controllers/RegistersController');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/register', RegisterRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));