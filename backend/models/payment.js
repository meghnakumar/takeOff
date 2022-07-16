const mongoose = require("mongoose");

const max = 10000;
const min = 500;

const CardSchema = new mongoose.Schema({
	cardName: {
		type: String,
		required: true,
	},
    cardNumber: {
		type: String,
		required: true,
	},
    cardExpiry: {
		type: Date,
		required: true,
	},
    cardType: {
		type: String,
		required: true,
	},
});


const PaymentSchema = new mongoose.Schema({
	user_id: {
		type: String,
		required: true,
	},
    Balance:{
        type: Number,
        Default: Math.floor(Math.random()*(max-min+1)+min),
    },
	Cards: {
		type: [CardSchema],
		required: true,
	},
	
});

module.exports = Payments = mongoose.model("payments", PaymentSchema);
