/**
 * @author ${Bhavesh Lalwani}
 */

const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
    flightCompany: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    stops: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = Flights = mongoose.model("flights", FlightSchema);
