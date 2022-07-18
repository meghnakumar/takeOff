// @author: Kalpit Machhi
// @description: This file contains the model schema for wallet history table.
// @feature: Wallet Management

const mongoose = require("mongoose");

const WalletHistorySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = WalletHistory = mongoose.model(
  "wallet_history_details",
  WalletHistorySchema
);
