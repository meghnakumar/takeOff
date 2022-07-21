var mongodb = require('mongodb');
const Hotels = require("../models/hotelList");
const HotelBookings = require("../models/hotelBookings");

/*Author: Created by Meghna Kumar
Contains all the functions for hotels and the operations related to modify, cancel and update status booking*/

//Retrieves the list of all the hotels from the hotels collection
module.exports.getAll = (req, res) => {
    Hotels.find().then((hotels) => res.json(hotels));
};

//Retrieves a specific hotel based on id
module.exports.getById = (req,res) =>{
    Hotels.findById(req._id,(hotel)=>res.json(hotel))
}

//Retrieves the list of all the bookings for a particular user
module.exports.getHotelBooking = (req,res) =>{
    HotelBookings.find({ userId: req.params.userId })
        .then((info) => res.json(info))
        .catch((err) => res.status(404).json({ error: "unable to find info" }));
}

//Creates a new booking for the user
module.exports.addHotelBooking = (req, res) => {
    HotelBookings
        .create(req.body)
        .then((info) => res.json(info))
        .catch((err) => res.json(err));
};

//Modifies the email or contact number for an existing booking for a user
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

//Deletes the booking for a user
module.exports.cancelHotelBooking = (req, res) => {
    HotelBookings
        .deleteOne({_id: new mongodb.ObjectID(req.params.id)})
        .then((info) => res.json(info))
        .catch((err) => res.json(err));
};

//Adds review for a particular hotel provided by the user
module.exports.addReviews=(req,res)=>{
    try{
        Hotels.findOneAndUpdate({_id: new mongodb.ObjectID(req.params.id)},{$push: {"reviews":req.body}})
            .then((info) =>{
                 return res.status(200).json({info: info, msg:"Review added successfully"})
            })
    }

    catch(err){
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        })
}}

//updates the status of booking from pending to confirmed on succesful payment for the booking
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


