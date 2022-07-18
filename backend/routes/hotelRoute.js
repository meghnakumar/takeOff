const express = require("express");
const router = express.Router();
const { getAll, getById, getHotelBooking, cancelHotelBooking, modifyHotelBooking, addHotelBooking, addReviews,
    updateBookingStatus
} = require("../controller/hotelAndReviews");

// @route GET /hotels/get
// @description get all hotels list
// @access Public
/*Author: Created by Meghna Kumar
Contains routes for all the functions exposed in controller hotelAndReviews*/

router.get("/get", getAll);
router.get("/get/:id",getById);
router.get("/get/hotelBookings/:userId", getHotelBooking)
router.get("/cancel/hotelBookings/:id", cancelHotelBooking)
router.put("/modify/hotelBookings/:id", modifyHotelBooking)
router.post("/create/hotelBookings", addHotelBooking)
router.put("/addReview/:id", addReviews)
router.put("/updateBookingStatus/:id", updateBookingStatus)

module.exports = router;
