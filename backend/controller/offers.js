const offers = require("../models/offers");

module.exports.getOffers = (req, res) => {
  offers
    .find({})
    .then((info) => res.json(info))
    .catch((err) => res.status(404).json({ error: err }));
};

module.exports.getMainOffer = (req, res) => {
  offers
    .find({ type: "Mix" })
    .then((info) => res.json(info))
    .catch((err) => res.json(err));
};

module.exports.getPromoValidation = (req, res) => {
  offers
    .find({ promocode: req.query.promocode })
    .then((info) => {
      if (info) {
        if (
          parseInt(req.query.price) >= info[0].min_amount &&
          parseInt(req.query.price) <= info[0].max_amount &&
          req.query.type == info[0].type
        ) {
          const discountedPrice =
            parseInt(req.query.price) -
            parseInt(req.query.price) * (info[0].percentage / 100);
          res.json({
            status: 200,
            validation: true,
            amount: discountedPrice,
          });
        } else {
          res.json({ status: 400, validation: false });
        }
      }
    })
    .catch((err) => res.json(err));
};
