/**
 * @author ${Bhavesh Lalwani}
 */

const FlightBookings = require("../models/flightBookings");
var mongodb = require('mongodb');

// Get all flight bookings
module.exports.getAllFlightBookings = (req, res) => {
	FlightBookings.find().then((bookings) => res.json(bookings));
};

// Get all flight bookings for a user
module.exports.getFlightBookings = (req, res) => {
	FlightBookings.find({ userId: req.params.id }).then((bookings) => res.json(bookings));
};

// Add flight booking after payment
module.exports.addFlightBooking = (req, res) => {
    FlightBookings
        .create(req.body)
        .then((info) => res.json(info))
        .catch((err) => res.json(err)); 
};

// Edit the flight booking details
module.exports.modifyFlightBooking = (req, res) => {
    FlightBookings
        .update({_id: new mongodb.ObjectID(req.params.id)}, {$set: req.body})
        .then((info) =>
            res.json({
                msg: "Updated successfully",
            })
        )
        .catch((err) => res.status(400).json({ error: "Unable to update info" }));
};

// Update booking status after payment
module.exports.updateBookingStatus=(req,res)=>{
    FlightBookings
        .update({_id: new mongodb.ObjectID(req.params.id)}, {$set: req.body})
        .then((info) =>
            res.json({
                msg: "Booking status Updated successfully",
            })
        )
        .catch((err) => res.status(400).json({ error: "Unable to update info" }));
};

// Cancel flight booking
module.exports.cancelFlightBooking = (req, res) => {
    FlightBookings
        .deleteOne({_id: new mongodb.ObjectID(req.params.id)})
        .then((info) => res.json(info))
        .catch((err) => res.json(err));
};
