// @author: Kalpit Machhi
// @description: This file contains the routes for the wallet feature.
// @feature: Wallet Management

const express = require("express");
const router = express.Router();

const {
  getWalletBalance,
  addMoney,
  getWalletHistory,
  addTransaction,
  addInitialBalance,
  updateMoney,
} = require("../controller/wallet");

// @route POST /wallet
// @description add money to wallet
// @access Public
router.post("/initialbalance/:userId", addInitialBalance);

// @route POST /wallet
// @description add money to wallet
// @access Public
router.post("/", addMoney);

// @route POST /wallet/update
// @description update wallet balance
// @access Public
router.post("/update", updateMoney);

// @route DELETE /wallet/history
// @description get wallet history for userId
// @access Public
router.get("/history/:userId", getWalletHistory);

// @route POST /wallet/transaction
// @description add transaction
// @access Public
router.post("/transaction", addTransaction);

// @route GET /wallet/:userID
// @description get wallet balance for userId
// @access Public
router.get("/:userId", getWalletBalance);

module.exports = router;
