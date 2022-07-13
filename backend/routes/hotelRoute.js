const express = require("express");
const router = express.Router();
const { getAll } = require("../controller/hotel");

// @route GET /hotels/get
// @description get all hotels list
// @access Public
router.get("/get", getAll);

module.exports = router;
