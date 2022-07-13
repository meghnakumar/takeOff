const mongoose = require("mongoose");

const eventBookingSchema = new mongoose.Schema({
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
	price: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
	eventId: {
		type: String,
		required: true,
	},
});

module.exports = eventsBooking = mongoose.model(
	"eventBooking",
	eventBookingSchema
);
