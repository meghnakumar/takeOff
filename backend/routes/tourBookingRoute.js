const express = require("express");
const router = express.Router();
const {
	getBookingInfo,
	addBookingInfo,
	editBookingInfo,
} = require("../controller/tourBooking");

// @route GET /events/booking/:id
// @description get booking info by id
// @access Public

router.get("/fetch/:userId", getBookingInfo);

// @route POST /events/booking/addInfo
// @description create booking info
// @access Public

router.post("/addInfo", addBookingInfo);

// @route PUT /events/booking/update/:id
// @description update info based on id
// @access Public

router.put("/update/:userId", addBookingInfo);

module.exports = router;
