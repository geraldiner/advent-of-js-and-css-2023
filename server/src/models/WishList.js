const mongoose = require('mongoose');

const {Schema} = mongoose;

const requiredString = {
	type: String,
	required: true,
};

const requiredNumber = {
	type: Number,
	required: true,
};

const WishListSchema = new Schema(
	{
		name: requiredString,
		url: requiredString,
		userId: requiredNumber,
		order: requiredNumber,
		eventId: requiredString,
		siteImage: String,
		siteTitle: String,
		siteDescription: String,
	},
	{timestamps: true}
);

const WishList = mongoose.model('WishList', WishListSchema);

module.exports = WishList;
