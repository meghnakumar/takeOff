const mongoose = require("mongoose");

/*Author: Created by Meghna Kumar
Model class for hotel object*/

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
    },
    rooms:{
        room:{
            name:{
                type:String,
                required: true
            },
            size:{
                type:String,
                required: true
            },
            beds:{
                type:String,
                required:true
            },
            view:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            tax:{
                type:Number,
                required:true
            },
            img:{
                type:String,
                required:true
            }
        }
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            hotelName:{
                type:String,
                required:true
            },
            location:{
                type:String,
                required:true
            },
            feedback:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required: true
            }
        }
    ]


});

module.exports = Hotels = mongoose.model("hotels", HotelSchema);
