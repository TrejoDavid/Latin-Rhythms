var express = require('express');
var router = express.Router();
var CreateClassModel = require('../models/create-class');
var UserModel = require('../models/users');


router.get("/monday-schedule", function(req,res){
	CreateClassModel.find({"dayofweek": "Monday"},function(err,socialevent){
		res.json(socialevent)
	});
});

router.get("/tuesday-schedule", function(req,res){
	CreateClassModel.find({"dayofweek": "Tuesday"},function(err,socialevent){
		res.json(socialevent)
	});
});

router.get("/wednesday-schedule", function(req,res){
	CreateClassModel.find({"dayofweek": "Wednesday"},function(err,socialevent){
		res.json(socialevent)
	});
});

router.get("/thursday-schedule", function(req,res){
	CreateClassModel.find({"dayofweek": "Thursday"},function(err,socialevent){
		res.json(socialevent)
	});
});

router.get("/friday-schedule", function(req,res){
	CreateClassModel.find({"dayofweek": "Friday"},function(err,socialevent){
		res.json(socialevent)
	});
});

router.get("/saturday-schedule", function(req,res){
	CreateClassModel.find({"dayofweek": "Saturday"},function(err,socialevent){
		res.json(socialevent)
	});
});

router.post("/register/:id/:username", function(req,res){
	UserModel.find({"username" : req.params.username}, function(err, user){
	CreateClassModel.update( {_id: req.params.id},{$push: {"students_registered": {$each: user}}},
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

module.exports = router;






			 		// console.log(user.firstname);
				  //   classroom.students_registered.push({students_registered: });

				    // classroom.save(function(err,resp) {
				    //     if(err) {
				    //         console.log(err);
				    //         res.send({
				    //             message :'something went wrong'
				    //         });
				    //     } else {
				    //         res.send({
				    //             message:'the appointment has bees saved'
				    //         });
				    //     }           
				    // });


