var express = require('express');
var router = express.Router();
var CreateClassModel = require('../models/create-class');


router.post("/create",function(req,res){

	var classes = new CreateClassModel();

	classes.instructor = req.body.instructor;
	classes.name = req.body.name;
	classes.time = req.body.time;
	classes.timeend = req.body.timeend;
	classes.datestart = req.body.datestart;
	classes.dateend = req.body.dateend;
	classes.description = req.body.description;
	classes.level = req.body.level;
	classes.lesson = req.body.lesson;
	classes.duration = req.body.duration;
	classes.dayofweek = req.body.dayofweek;


	classes.save(function(){
		res.send();
	});

});

router.get('/view/:id', function(req,res){

	CreateClassModel.findById({_id: req.params.id}, function(err,post){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		// 	console.log(req.params.id);
		// return res.status(200).send();
		  res.json(post);
	});
});


router.get("/view", function(req,res){
	CreateClassModel.find(function(err,posts){
		res.json(posts);
	});
});


router.delete('/class/:id',function(req,res){
	var id = req.params.id;

	CreateClassModel.findOneAndRemove({_id: id}, function(err){
		if(err){
			console.log(err);
			return res.status(500).send();
		}

		return res.status(200).send();
	});
});


module.exports = router;