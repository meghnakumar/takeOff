const Events = require("../models/eventModel");

module.exports.getAll = (req, res) => {
	Events.find().then((events) => res.json(events));
};
