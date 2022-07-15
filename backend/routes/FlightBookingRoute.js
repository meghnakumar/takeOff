const express = require("express");
const router = express.Router();
const { getFlightBookings, addFlightBooking, modifyFlightBooking } = require("../controller/flightBookings");

// @route GET /flightbookings
// @description get all flights
// @access Public
router.get("/", getFlightBookings);

// @route POST /flightbookings/add
// @description create booking info
// @access Public

router.post("/add", addFlightBooking);

// @route PUT /flightbookings/update/:id
// @description update info based on id
// @access Public

router.put("/update/:id", modifyFlightBooking);

module.exports = router;
