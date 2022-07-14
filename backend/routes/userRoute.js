const express = require("express");
const router = express.Router();

const { getUser,getAllUser, addUser, editUser } = require("../controller/user");

// @route GET /events/booking/:id
// @description get booking info by id
// @access Public

router.get("/getall", getAllUser);

router.get("/fetch/:userId", getUser);

// @route POST /events/booking/addInfo
// @description create booking info
// @access Public

router.post("/addUser", addUser);

// @route PUT /events/booking/update/:id
// @description update info based on id
// @access Public

router.put("/update/:userId", editUser);

module.exports = router;
