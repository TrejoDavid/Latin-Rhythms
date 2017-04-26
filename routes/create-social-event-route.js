var express = require('express');
var router = express.Router();
var SocialEventModel = require('../models/social-event');


router.get("/social", function(req,res){
	SocialEventModel.find(function(err,socialevent){
		res.json(socialevent)
	});
});

router.post("/social",function(req,res){

var socialPost = new SocialEventModel();

	socialPost.name = req.body.name;
	socialPost.time = req.body.time;
	socialPost.date = req.body.date;
	socialPost.location = req.body.location;
	socialPost.address = req.body.address;
	socialPost.picture = req.body.picture;
	socialPost.description = req.body.description;


	socialPost.save(function(){
		res.send();
	});

});


router.get('/view/:id', function(req,res){

	SocialEventModel.findById({_id: req.params.id}, function(err,post){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		// 	console.log(req.params.id);
		// return res.status(200).send();
		  res.json(post);
	});
});

module.exports = router;


