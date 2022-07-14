const Cart = require("../models/cartModel");
const mongodb = require("mongodb");

module.exports.getItems = (req, res) => {
  Cart.find({ userId: req.params.userId })
    .then((info) => res.json(info))
    .catch((err) => res.status(404).json({ error: "Unable to find info" }));
};

module.exports.addItem = (req, res) => {
  const item = new Cart({
    type: req.body.type,
    userId: req.body.userId,
    itemId: req.body.itemId,
    price: req.body.price,
  });

  const result = item
    .save()
    .then(() => {
      console.log("Item is added to the cart.");
    })
    .catch(() => {
      console.log("Item insertion failed!");
    });

  res.json(result);
};

module.exports.deleteItem = (req, res) => {
  const cartId = req.params.cartId;

  const result = Cart.deleteOne({ _id: new mongodb.ObjectId(cartId) })
    .then(() => {
      console.log("Item is deleted.");
    })
    .catch(() => {
      console.log("Failed to delete item!");
    });

  res.json(result);
};
