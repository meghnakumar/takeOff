/**
 * @author ${Bhavesh Lalwani}
 */

const FlightList = require("../models/flightList");


// Get available list of flights
module.exports.getFlights = (req, res) => {
	FlightList.find().then((flights) => res.json(flights));
};