/**
 * @author ${Bhavesh Lalwani}
 */

const express = require("express");
const router = express.Router();
const { getFlights } = require("../controller/flights");

// @route GET /flights
// @description get all flights
// @access Public
router.get("/", getFlights);

module.exports = router;