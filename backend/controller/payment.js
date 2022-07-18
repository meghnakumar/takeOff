const payment = require("../models/payment");

module.exports.addInitialUser = (req, res) => {
  const user = { userId: req.body.userId };
  payment
    .insertOne(user, (err, res))
    .then((info) => res.json(info[0].cards))
    .catch((err) => res.status(404).json({ error: err }));
};

module.exports.getCards = (req, res) => {
  payment
    .find({ userId: req.query.id })
    .then((info) => res.json(info[0].cards))
    .catch((err) => res.status(404).json({ error: err }));
};

module.exports.addCard = (req, res) => {
  payment
    .updateOne({ userId: req.body.userId }, { $push: { cards: req.body } })
    .then((info) => res.json(info))
    .catch((err) => res.json(err));
};;
