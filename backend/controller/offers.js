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
    .find({ promocode: req.body.promocode })
    .then((info) => {
      if (info) {
        console.log(info);
        if (
          parseInt(req.body.price) >= info[0].min_amount &&
          parseInt(req.body.price) <= info[0].max_amount &&
          req.body.type.toLowerCase() == info[0].type.toLowerCase()
        ) {
          const discountedPrice =
            parseInt(req.body.price) -
            parseInt(req.body.price) * (info[0].percentage / 100);
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
    .catch((error) => {
      res.json({ status: 400, validation: false });
    });
};
