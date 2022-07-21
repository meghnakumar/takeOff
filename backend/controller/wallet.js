// @author: Kalpit Machhi
// @description: This file contains login for adding money to wallet, getting wallet balance, and fetching wallet history.
// @feature: Wallet Management

const Wallet = require("../models/walletModel");
const WalletHistory = require("../models/walletHistoryModel");

module.exports.getWalletBalance = (req, res) => {
  Wallet.find({ userId: req.params.userId })
    .then((info) => {
      // console.log("Wallet balance fetched.");
      res.json(info[0].balance);
    })
    .catch((err) => {
      // console.log("Error in fetching wallet balance.");
      res.status(404).json({ error: "Unable to find info" });
    });
};

module.exports.addInitialBalance = (req, res) => {
  const item = new Wallet({
    userId: req.params.userId,
    balance: 100,
  });

  const result = item
    .save()
    .then(() => {
      // console.log("Initial wallet balance added.");
    })
    .catch(() => {
      // console.log("Initial wallet balance insertion failed!");
    });

  res.json(result);
};

module.exports.addMoney = (req, res) => {
  var userId = req.body.userId;
  var amount = req.body.amount;

  Wallet.find({ userId: req.body.userId })
    .then((info) => {
      // console.log("Adding to wallet balance.");
      info[0].balance += req.body.amount;

      const result = info[0]
        .save()
        .then(() => {
          // console.log("Money added to the wallet.");
        })
        .catch(() => {
          // console.log("Money insertion failed!");
        });

      res.json(result);
    })
    .catch((err) => {
      // console.log("Error in fetching wallet balance.");
      res.status(404).json({ error: "Unable to find info" });
    });
};

module.exports.updateMoney = (req, res) => {
  Wallet.find({ userId: req.body.userId })
    .then((info) => {
      // console.log("Updating wallet balance.");
      info[0].balance -= req.body.amount;

      const result = info[0]
        .save()
        .then(() => {
          // console.log("Wallet money updated.");
        })
        .catch(() => {
          // console.log("Money updation failed!");
        });

      res.json(result);
    })
    .catch((err) => {
      // console.log("Error in fetching wallet balance.");
      res.status(404).json({ error: "Unable to find info" });
    });
};

module.exports.getWalletHistory = (req, res) => {
  const userId = req.params.userId;

  WalletHistory.find({ userId: req.params.userId })
    .then((info) => {
      // console.log("Wallet history fetched.");
      res.json(info);
    })
    .catch((err) => {
      // console.log("Error in fetching wallet history.");
      res.status(404).json({ error: "Unable to find info" });
    });
};

module.exports.addTransaction = (req, res) => {
  const item = new WalletHistory({
    type: req.body.type,
    userId: req.body.userId,
    price: req.body.price,
    date: req.body.date,
    message: req.body.message,
    status: req.body.status,
  });

  const result = item
    .save()
    .then(() => {
      // console.log("Item added to the wallet history.");
    })
    .catch(() => {
      // console.log("Item insertion failed!");
    });

  res.json(result);
};
