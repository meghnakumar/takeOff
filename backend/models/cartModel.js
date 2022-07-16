// @author: Kalpit Machhi
// @description: This file contains the model schema for cart table.
// @feature: Cart Management

const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
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
