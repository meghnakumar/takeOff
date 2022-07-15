const TourPackages = require("../models/tourPackageModel");

module.exports.getAll = (req, res) => {
	TourPackages.find().then((tour) => res.json(tour));
};
