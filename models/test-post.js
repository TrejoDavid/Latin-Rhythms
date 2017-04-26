var mongoose = require('mongoose');
var UserModel = require('../models/test-post');
var PostModel = require('../models/test-post');
 

var TestPostSchema = new mongoose.Schema({
	title: {type: String},
	user: {
		ref: 'User',
		type: String
	}

});

module.exports = mongoose.model('TestPost',TestPostSchema);