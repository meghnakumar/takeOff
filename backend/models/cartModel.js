const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    itemId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = Cart = mongoose.model("cart", CartSchema);