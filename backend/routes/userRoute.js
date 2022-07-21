const express = require("express");
const router = express.Router();

const { getUser,getAllUser, addUser, editUser,login } = require("../controller/user");

// @route GET /events/booking/:id
// @description get booking info by id
// @access Public

router.get("/getall", getAllUser);

router.get("/fetch/:email", getUser);

// @route POST /events/booking/addInfo
// @description create booking info
// @access Public

router.post("/addUser", addUser);

router.post("/login", login);

// @route PUT /events/booking/update/:id
// @description update info based on id
// @access Public

router.put("/update", editUser);

module.exports = router;
