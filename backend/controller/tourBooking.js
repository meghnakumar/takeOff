const toursBooking = require("../models/tourBookingModel");

module.exports.getBookingInfo = (req, res) => {
	toursBooking
		.find({ userId: req.params.userId })
		.then((info) => res.json(info))
		.catch((err) => res.status(404).json({ error: "unable to find info" }));
};

module.exports.addBookingInfo = (req, res) => {
	toursBooking
		.create(req.body)
		.then((info) => res.json(info))
		.catch((err) => res.json(err));
};

module.exports.editBookingInfo = (req, res) => {
	toursBooking
		.findOneAndUpdate(req.params.id, req.body)
		.then((info) =>
			res.json({
				msg: "Updated successfully",
			})
		)
		.catch((err) => res.status(400).json({ error: "Unable to undate info" }));
};
