const FlightBookings = require("../models/flightBookings");
var mongodb = require('mongodb');

module.exports.getAllFlightBookings = (req, res) => {
	FlightBookings.find().then((bookings) => res.json(bookings));
};

module.exports.getFlightBookings = (req, res) => {
	FlightBookings.find({ userId: req.params.id }).then((bookings) => res.json(bookings));
};

module.exports.addFlightBooking = (req, res) => {
    FlightBookings
        .create(req.body)
        .then((info) => res.json(info))
        .catch((err) => res.json(err)); 
};

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

module.exports.cancelFlightBooking = (req, res) => {
    FlightBookings
        .deleteOne({_id: new mongodb.ObjectID(req.params.id)})
        .then((info) => res.json(info))
        .catch((err) => res.json(err));
};
