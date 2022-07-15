// @author: Kalpit Machhi
// @banner: B00911364

const express = require("express");
const router = express.Router();

const {
  getWalletBalance,
  addMoney,
  getWalletHistory,
} = require("../controller/wallet");

// @route GET /wallet/:userID
// @description get wallet balance for userId
// @access Public
router.get("/:userId", getWalletBalance);

// @route POST /wallet
// @description add money to wallet
// @access Public
router.post("/", addMoney);

// @route DELETE /wallet/history
// @description get wallet history for userId
// @access Public
router.get("/history/:userId", getWalletHistory);

module.exports = router;
