const mongoose = require("mongoose");

const OffersSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  promocode: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  min_amount: {
    type: String,
    required: true,
  },
  max_amount: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  expiry_date: {
    type: Date,
    required: true,
  },
});

module.exports = Offers = mongoose.model("offers", OffersSchema);
