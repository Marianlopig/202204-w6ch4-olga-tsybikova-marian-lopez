const things = require("../../things");
const debug = require("debug")("things");
const express = require("express");
const router = express.Router();

const app = express();

router.get("/", (req, res) => {
  debug("They want to know what i know");
  res.status(200).json(things);
});

router.get("/:idThing", (req, res) => {
  const id = req.params.idThing;
  const selectedThing = things.filter((thing) => thing.id === id);
  if (selectedThing.length === 0) {
    res.status(404).json();
  } else {
    res.status(200).json(selectedThing[0]);
  }
});

module.exports = router;
