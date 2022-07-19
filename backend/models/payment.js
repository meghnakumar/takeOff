const mongoose = require("mongoose");

const max = 10000;
const min = 500;

const CardSchema = new mongoose.Schema(
  {
    card_name: {
      type: String,
      required: true,
    },
    card_number: {
      type: String,
      required: true,
    },
    card_company: {
      type: String,
      required: true,
    },
    card_type: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const PaymentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    Default: Math.floor(Math.random() * (max - min + 1) + min),
  },
  cards: {
    type: Object,
    required: true,
   }
});

module.exports = Payments = mongoose.model("payments", PaymentSchema);
