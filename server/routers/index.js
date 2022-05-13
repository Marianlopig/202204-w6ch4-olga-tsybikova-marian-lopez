const things = require("../../things");
const debug = require("debug")("things");
const express = require("express");
const router = express.Router();

const app = express();

router.get("/", (req, res) => {
  res.status(200).json(things);
});

const getThingById = (req, res) => {
  const id = req.params.idThing;
  const selectedThing = things.filter((thing) => thing.id === id);
  if (selectedThing.length === 0) {
    res.status(404);
    res.json();
  } else {
    res.status(200);
    res.json(selectedThing[0]);
  }
};
router.get("/:idThing", getThingById);

module.exports = router;
module.exports = getThingById;
