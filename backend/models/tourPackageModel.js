const mongoose = require("mongoose");

const TourPackageSchema = new mongoose.Schema({
	days: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	destination: {
		type: String,
		required: true,
	},
	hotel_description: {
		type: String,
		required: true,
	},
	hotel_name: {
		type: String,
		required: true,
	},
	hotel_rating: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	trans_arrival: {
		type: String,
		required: true,
	},
	trans_arrival_destination: {
		type: String,
		required: true,
	},
	trans_departure: {
		type: String,
		required: true,
	},
	trans_departure_destination: {
		type: String,
		required: true,
	},
	trans_mode: {
		type: String,
		required: true,
	},
	trans_name: {
		type: String,
		required: true,
	},
});

module.exports = TourPackages = mongoose.model(
	"tour packages",
	TourPackageSchema
);
