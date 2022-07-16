const express = require("express");
const router = express.Router();

const { getBooking, addInfo, editInfo } = require("../controller/eventBooking");

// @route GET /events/booking/:id
// @description get booking info by id
// @access Public

router.get("/fetch/:userId", getBooking);

// @route POST /events/booking/addInfo
// @description create booking info
// @access Public

router.post("/addInfo", addInfo);

// @route PUT /events/booking/update/:id
// @description update info based on id
// @access Public

router.put("/update/:userId", editInfo);

module.exports = router;
