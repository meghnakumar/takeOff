const payment = require("../models/payment");

module.exports.getCards = (req, res) => {
  payment
    .find({ user_id: req.query.userId })
    .then((info) => res.json(info[0].cards))
    .catch((err) => res.status(404).json({ error: err }));
};

module.exports.addCard = (req, res) => {
  payment
    .updateOne({ user_id: req.query.userId }, { $push: { cards: req.body } })
    .then((info) => res.json(info))
    .catch((err) => res.json(err));
};
