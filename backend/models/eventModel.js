const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	addressLine1: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	details: {
		type: String,
		required: true,
	},
	seats: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
});

module.exports = Events = mongoose.model("event", EventSchema);
