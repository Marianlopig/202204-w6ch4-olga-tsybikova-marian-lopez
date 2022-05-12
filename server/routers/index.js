const things = require("../../things");
const debug = require("debug")("things");
const express = require("express");
const router = express.Router();

const app = express();

router.get("/", (req, res) => {
  debug("They want to know what i know");
  res.json(things);
});

module.exports = router;
