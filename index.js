require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.SERVER_PORT;

app.listen(port, () => {
  debug("Hola chicas, estoy aqui!");
});

module.exports = port;
