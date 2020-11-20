let UserStory = require("../models/userStory.model");

module.exports = {
	findAll: function (req, res) {
		UserStory.find(req.query)
			.then((userStory) => res.json(userStory))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		UserStory.findById(req.params.id)
			.then((userStory) => res.json(userStory))
			.catch((err) => res.status(422).json(err));
	},
	create: function (req, res) {
		UserStory.create(req.body)
			.then((userStory) => res.json(userStory))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		UserStory.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((userStory) => res.json(userStory))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		UserStory.findById({ _id: req.params.id })
			.then((userStory) => userStory.remove())
			.then((userStory) => res.json(userStory))
			.catch((err) => res.status(422).json(err));
	},
};
