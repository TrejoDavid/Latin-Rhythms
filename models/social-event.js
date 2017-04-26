var mongoose = require('mongoose');
var UserModel = require('../models/users'); 


var socialRegisteredSchema = mongoose.Schema({
        username: String,
        firstname: String,
        lastname: String,
        gender: String,
        picture: String,
        email: String
    }, { _id: false });



var SocialEventSchema = mongoose.Schema({
	name: {type:String},
	time: {type:String},
	date: {type:Date},
	description: {type: String},
	location: {type: String},
	address: {type: String},
	picture: {type: String, default: 'https://scontent.ford1-1.fna.fbcdn.net/t31.0-8/13041465_638090746345112_5805863441895359972_o.jpg'},
	people_registered: [socialRegisteredSchema]

});


module.exports = mongoose.model('SocialEventModel',SocialEventSchema);