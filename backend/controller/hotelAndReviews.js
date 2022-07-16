var mongodb = require('mongodb');
const Hotels = require("../models/hotelList");
const HotelBookings = require("../models/hotelBookings");
const eventsBooking = require("../models/bookingEvents");

module.exports.getAll = (req, res) => {
    console.log("making hotel list db call")
    Hotels.find().then((hotels) => res.json(hotels));
};

module.exports.getById = (req,res) =>{
    Hotels.findById(req._id,(hotel)=>res.json(hotel))
}

module.exports.getHotelBooking = (req,res) =>{
    HotelBookings.find({ userId: req.params.userId })
        .then((info) => res.json(info))
        .catch((err) => res.status(404).json({ error: "unable to find info" }));
}
module.exports.addHotelBooking = (req, res) => {
    HotelBookings
        .create(req.body)
        .then((info) => res.json(info))
        .catch((err) => res.json(err));
};

module.exports.modifyHotelBooking = (req, res) => {
    HotelBookings
        .update({_id: new mongodb.ObjectID(req.params.id)}, {$set: req.body})
        .then((info) =>
            res.json({
                msg: "Updated successfully",
            })
        )
        .catch((err) => res.status(400).json({ error: "Unable to update info" }));
};

module.exports.cancelHotelBooking = (req, res) => {
    HotelBookings
        .deleteOne({_id: new mongodb.ObjectID(req.params.id)})
        .then((info) => res.json(info))
        .catch((err) => res.json(err));
};

module.exports.addReviews=(req,res)=>{
    Hotels.update({_id: new mongodb.ObjectID(req.params.id)},{$push: {"reviews":req.body}})
        .then((info) => res.json({msg:"Review added successfully"}))
        .catch((err) => res.json(err));
};

module.exports.updateBookingStatus=(req,res)=>{
    HotelBookings
        .update({_id: new mongodb.ObjectID(req.params.id)}, {$set: req.body})
        .then((info) =>
            res.json({
                msg: "Booking status Updated successfully",
            })
        )
        .catch((err) => res.status(400).json({ error: "Unable to update info" }));
};

//ask Sharad to provide whole user object, along with user ID and name

