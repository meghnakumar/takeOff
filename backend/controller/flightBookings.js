const FlightBookings = require("../models/flightBookings");

module.exports.getFlightBookings = (req, res) => {
	FlightBookings.find().then((bookings) => res.json(bookings));
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