var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');


// Angular Controller Located in folder public/views/adminpanel/EditUser/edit-user.js

//Profile Route: app.use('/profile',ProfileRoute);

// The function below is see wether or not a user is authorize to vist a page.
var auth = function(req, res, next)
{
	if(!req.isAuthenticated()){
		res.send(401);
	}else {
		next();
	}
};

router.get("/user", auth ,function(req,res){
	UserModel.find(function(err,users){
		res.json(users);
	});
});


router.get("/user/:id",function(req,res){
		UserModel.findById({_id: req.params.id}, function(err,post){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		  res.json(post);
	});

});


router.delete('/user/:id',function(req,res){
	var id = req.params.id;

	UserModel.findOneAndRemove({_id: id}, function(err){
		if(err){
			console.log(err);
			return res.status(500).send();
		}

		return res.status(200).send();
	});
});

module.exports = router;
