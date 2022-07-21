const mongoose = require("mongoose");

/*Author: Created by Meghna Kumar
Model class for hotel bookings object*/
const HotelBookingSchema = new mongoose.Schema({
    startDate:{
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true,
    },
    roomType: {
        type: String,
        required: true,
    },
    hotelName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },

    guests: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    numberOfRooms: {
        type: Number,
        required: true,
    },
    guestName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    userId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    hotelId:{
        type:String,
        required:true
    }
});

module.exports = HotelBookings = mongoose.model("hotelBookings", HotelBookingSchema);