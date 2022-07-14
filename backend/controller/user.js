
const Users = require("../models/userModel");


module.exports.getAllUser = (req, res) => {
    Users.find().then((users) => res.json(users));
};


module.exports.getUser = (req, res) => {
	Users
		.find({ email: req.params.email })
		.then((info) => res.json(info))
		.catch((err) => res.status(404).json({ error: "unable to find info" }));
};

module.exports.addUser = (req, res) => {
	Users
		.create(req.body)
		.then((info) => res.json(info))
		.catch((err) => res.json(err));
};

module.exports.editUser = (req, res) => {
	Users
		.findOneAndUpdate(req.params.userId, req.body)
		.then((info) =>
			res.json({
				msg: "Updated successfully",
			})
		)
		.catch((err) => res.status(400).json({ error: "Unable to undate info" }));
};
