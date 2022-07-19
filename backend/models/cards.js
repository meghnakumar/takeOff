const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
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
});

module.exports = Cards = mongoose.model("cards", CardSchema);
