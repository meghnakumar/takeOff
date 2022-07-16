// @author: Kalpit Machhi
// @description: This file contains the routes for the cart feature.
// @feature: Cart Management

const express = require("express");
const router = express.Router();

const { getItems, addItem, deleteItem } = require("../controller/cart");

// @route GET /cart/:user_id
// @description get all cart items for user_id
// @access Public
router.get("/:userId", getItems);

// @route POST /cart
// @description add item to cart
// @access Public
router.post("/", addItem);

// @route DELETE /cart/:item_id
// @description delete item from cart
// @access Public
router.delete("/:cartId", deleteItem);

module.exports = router;
