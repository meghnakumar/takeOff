// @author: Kalpit Machhi
// @description: This file contains the model schema for wallet table.
// @feature: Wallet Management

const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = Wallet = mongoose.model("wallet_details", WalletSchema);
