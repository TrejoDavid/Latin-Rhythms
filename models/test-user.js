var mongoose = require('mongoose');
var PostModel = require('../models/test-post');
var UserModel = require('../models/test-post'); 
 


var TestUserSchema = new mongoose.Schema({
	username: {type: String}
});


module.exports = mongoose.model('TestUser',TestUserSchema);
