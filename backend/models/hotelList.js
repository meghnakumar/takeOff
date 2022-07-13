const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
});

module.exports = Hotels = mongoose.model("hotels", HotelSchema);
