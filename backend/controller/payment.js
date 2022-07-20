const payment = require("../models/payment");
const cards = require("../models/cards");

module.exports.addInitialUser = (req, res) => {
  const user = { userId: req.params.id, balance: 0, cards: [] };
  payment
    .create(user)
    .then((info) => res.json(info))
    .catch((err) => res.status(404).json({ error: err }));
};

module.exports.getCards = (req, res) => {
  cards
    .find({ userId: req.query.id })
    .then((info) => res.json(info))
    .catch((err) => res.status(404).json({ error: err }));
};

module.exports.addCard = (req, res) => {
  cards
    .create(req.body)
    .then((info) => res.json(info))
    .catch((err) => res.json(err));
};;
