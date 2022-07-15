const mongoose = require("mongoose");

const tourBookingSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	seat: {
		type: String,
	},
	contact: {
		type: String,
	},
	userId: {
		type: String,
	},
	tourId: {
		type: String,
	},
	type: {
		type: String,
		default: "tour",
	},
	status: {
		type: String,
		default: "pending",
	},
	days: {
		type: String,
	},
	destination: {
		type: String,
	},
	date: {
		type: String,
	},
	price: {
		type: String,
	},
});

module.exports = toursBooking = mongoose.model(
	"tourBooking",
	tourBookingSchema
);
