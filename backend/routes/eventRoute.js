const express = require("express");
const router = express.Router();
const Events = require("../models/eventModel");

// @route GET /events/get
// @description get all events
// @access Public
router.get("/get", (req, res) => {
	Events.find().then((events) => res.json(events));
});
module.exports = router;
