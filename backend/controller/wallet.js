// @author: Kalpit Machhi
// @banner: B00911364

// getWalletBalance, addMoney, getWalletHistory

const Wallet = require("../models/walletModel");
const mongodb = require("mongodb");

module.exports.getWalletBalance = (req, res) => {
  Cart.find({ userId: req.params.userId })
    .then((info) => {
      console.log("Cart data fetched.");
      res.json(info);
    })
    .catch((err) => {
      console.log("Error in fetching cart data.");
      res.status(404).json({ error: "Unable to find info" });
    });
};

module.exports.addMoney = (req, res) => {
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

module.exports.getWalletHistory = (req, res) => {
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
