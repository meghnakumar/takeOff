const eventsBooking = require("../models/bookingEvents");

module.exports.getBooking = (req, res) => {
	eventsBooking
		.find({ userId: req.params.userId })
		.then((info) => res.json(info))
		.catch((err) => res.status(404).json({ error: "unable to find info" }));
};

module.exports.addInfo = (req, res) => {
	console.log(req.body);
	eventsBooking
		.create(req.body)
		.then((info) => res.json(info))
		.catch((err) => res.json(err));
};

module.exports.editInfo = (req, res) => {
	eventsBooking
		.findOneAndUpdate(req.params.id, req.body)
		.then((info) =>
			res.json({
				msg: "Updated successfully",
			})
		)
		.catch((err) => res.status(400).json({ error: "Unable to undate info" }));
};
