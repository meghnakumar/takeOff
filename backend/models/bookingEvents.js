const mongoose = require("mongoose");

const eventBookingSchema = new mongoose.Schema({
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
	eventId: {
		type: String,
	},
	type: {
		type: String,
		default: "event",
	},
	status: {
		type: String,
		default: "pending",
	},
	title: {
		type: String,
		default: false,
	},
	city: {
		type: String,
	},
	date: {
		type: String,
	},
	price: {
		type: String,
	},
});

module.exports = eventsBooking = mongoose.model(
	"eventBooking",
	eventBookingSchema
);
