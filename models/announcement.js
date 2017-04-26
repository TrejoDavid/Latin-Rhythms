var mongoose = require('mongoose');

var adminAnnouncement = mongoose.Schema({
	title: {type: String, require: true, trim: true},
	description: {type: String, require: true, trim: true},
	admin: {type: Boolean, default: false}
});

module.exports = mongoose.model('adminAnnouncement',adminAnnouncement);