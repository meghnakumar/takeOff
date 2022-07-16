const express = require("express");
const router = express.Router();
const { getAll } = require("../controller/event");

// @route GET /events/get
// @description get all events
// @access Public
router.get("/get", getAll);

module.exports = router;
