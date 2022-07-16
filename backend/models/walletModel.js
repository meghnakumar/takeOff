// @author: Kalpit Machhi
// @description: This file contains the model schema for wallet table.
// @feature: Wallet Management

const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = Cart = mongoose.model("cart_items", CartSchema);
