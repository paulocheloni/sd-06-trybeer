require('dotenv').config();
const express = require("express");
const users = require('./models/users');
const app = express();
const port = 3001;
const { json } = require('body-parser')

app.use(json())

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", async (req, res) => {
      
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
