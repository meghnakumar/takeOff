const FlightList = require("../models/flightList");

module.exports.getFlights = (req, res) => {
	FlightList.find().then((flights) => res.json(flights));
};