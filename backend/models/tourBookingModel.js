const mongoose = require("mongoose");

const tourBookingSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	seat: {
		type: String,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
	tourId: {
		type: String,
		required: true,
	},
});

module.exports = toursBooking = mongoose.model(
	"tourBooking",
	tourBookingSchema
);
