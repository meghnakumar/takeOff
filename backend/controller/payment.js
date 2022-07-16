const payment = require("../models/paymentModel");

module.exports.addBankCard = (req, res) => {
  payment
    .create(req.body)
    .then((info) => res.json(info))
    .catch((err) => res.json(err));
};
