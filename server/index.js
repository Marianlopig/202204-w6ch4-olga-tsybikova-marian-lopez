require("dotenv").config();
const debug = require("debug")("things");
const express = require("express");
const morgan = require("morgan");
const router = require("./routers");

const app = express();

const initizeServer = (port) => {
  const server = app.listen(port, () => {
    server.on("error", (error) => {
      debug(chalk.red("There is a problem with your server"));
      if (error.code === "EADDRINUSE") {
        debug(chalk.red(`Port ${port}busy`));
      }
    });
  });
};
app.use(morgan("dev"));
app.use(express.json());
app.use("/things", router);

module.exports = initizeServer;
