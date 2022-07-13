const Hotels = require("../models/hotelList");

module.exports.getAll = (req, res) => {
    Hotels.find().then((hotels) => res.json(hotels));
};
