const express = require("express");
const router = express.Router();

const {
  getOffers,
  getMainOffer,
  getPromoValidation,
} = require("../controller/offers");

// to get all the available offers
router.get("/getoffers", getOffers);

// to get the biggest offer going on
router.get("/mainoffer", getMainOffer);

// to check for promocode validation
router.get("/validoffer", getPromoValidation);

module.exports = router;
