const express = require("express");
const router = express.Router();
const { getAllFlightBookings, getFlightBookings, addFlightBooking, modifyFlightBooking, updateBookingStatus } = require("../controller/flightBookings");

// @route GET /flightbookings
// @description get all flights
// @access Public
router.get("/", getAllFlightBookings);

// @route POST /flightbookings/add
// @description create booking info
// @access Public

router.post("/add", addFlightBooking);

// @route PUT /flightbookings/update/:id
// @description update info based on id
// @access Public
router.put("/update/:id", modifyFlightBooking);

// @route GET /flightbookings/id
// @description get all flights
// @access Public
router.get("/:id", getFlightBookings);


router.put("/updateBookingStatus/:id", updateBookingStatus)

module.exports = router;
