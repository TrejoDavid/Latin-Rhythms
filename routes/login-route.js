var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// app.use('/login',LoginRoute);

router.post("/user",passport.authenticate('local-login'),function(req,res){
	res.json(req.user);
});

module.exports = router;