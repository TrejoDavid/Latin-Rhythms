var express = require('express');
var bodyParser = require('body-parser');
var eventRouter = express.Router();
var SocialEventModel = require('../models/social-event');
var UserModel = require('../models/users'); 
eventRouter.use(bodyParser.json());



eventRouter.route('/events')
// Get all the Upcoming Eventsto populate informationt to client
.get(function(req,res,next){
	SocialEventModel.find({},function(err,events){
		if(err){
			return console.log(err);
		} else {
			res.json(events);
		}
	});
});


eventRouter.route('/register/:id/:username')
	.post(function(req,res,next){
		UserModel.find({"username" : req.params.username}, function(err, user){
			SocialEventModel.update( {_id: req.params.id},{$push: {"people_registered": {$each: user}}},
					 function(err, classroom) {
					 	if(err){
					 		console.log(err);
					 		return res.status(500).send()
					 	} else {
					 		return res.json(classroom);
					 	}
					});
			});

	});


module.exports = eventRouter;

