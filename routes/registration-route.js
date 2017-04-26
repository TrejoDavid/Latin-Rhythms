var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// public/views/registration/registration.js   app.use('/registration',RegistrationRoute);
router.post("/newuser", passport.authenticate('register'), function(req,res){
	res.json(req.user);
	console.log('complete');
});


module.exports = router;