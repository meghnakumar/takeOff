/**
 * @author ${Bhavesh Lalwani}
 */

const mongoose = require("mongoose");

const FlightBookingSchema = new mongoose.Schema({
    flightCompany: {
        type: String,
        required: true,
    },
    flightId: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    userId: {
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
    flightDate: {
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
    },
    noOfTravelers: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    travelerDetails: {
        type: Object,
        required: true
    }
});

module.exports = FlightBookings = mongoose.model("flightbookings", FlightBookingSchema);
