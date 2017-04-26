var flash = require('connect-flash');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Twitter = require('twitter');
var sendgrid = require('sendgrid')('EV6Ey_QrRo6cueXmw9n_jg');


// Connect Database
var db = mongoose.connect('mongodb://localhost/test');
var app = express();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var CreateSocialEventRoute = require('./routes/create-social-event-route'); 
var AnnouncementRoute = require('./routes/announcement-route');  
var CreateClassRoute = require('./routes/create-class-route');

var ProfileRoute = require('./routes/profile-route'); 
var RegistrationRoute = require('./routes/registration-route'); 
var LoginRoute = require('./routes/login-route');
var EditUserRoute = require('./routes/edit-user-route');
var ScheduleRoute = require('./routes/class-schedule-route');

var TwitterRoute = require('./routes/twitter-route');
var ClassRoute = require('./routes/class-route');

var SocialEventRoute = require('./routes/social-event-route');


var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'this is the secret'}));
// app.use(session({ key: 'express.sid', secret: 'keyboard cat', store: SessionStore }));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/announcement',AnnouncementRoute);
app.use('/create-class',CreateClassRoute);
app.use('/create-social',CreateSocialEventRoute);

app.use('/profile',ProfileRoute);
app.use('/registration',RegistrationRoute);
app.use('/login',LoginRoute);
app.use('/edit-user',EditUserRoute);
app.use('/schedule',ScheduleRoute);

app.use('/twitter',TwitterRoute);
app.use('/classroom',ClassRoute);
app.use('/social-event',SocialEventRoute);


////////// Authentication: Registration and Logging In Section END ///////////////////

// var UserSchema = new mongoose.Schema({
// 	username: {type: String, unique: true},
// 	password: String,
// 	email: String,
// 	firstName: String,
// 	lastName: String,
// 	roles: [String]
// });

// UserSchema.methods.generateHash = function(password){
// 	return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.isValidPassword = function(password){
// 	return bcrypt.compareSync(password, this.password);
// };


// var UserModel = mongoose.model('UserModel', UserSchema);


// 	passport.use('local-login', new LocalStrategy({
// 			usernameField: 'username',
// 			passwordField: 'password',
// 			passReqToCallback: true
// 		},
// 		function(req, username, password, done){
// 			process.nextTick(function(){
// 				UserModel.findOne({ username: username}, function(err, user){
// 					if(err)
// 						return done(err);
// 					if(!user)
// 						return done(null, false, req.flash('loginMessage', 'No User found'));
// 					if(!user.isValidPassword(password)){
// 						return done(null, false, req.flash('loginMessage', 'invalid password'));
// 					}
// 					return done(null, user);

// 				});
// 			});
// 		}
// 	));


// passport.use('register', new LocalStrategy(
// 	{
// 		usernamefield: 'username',
// 		passwordfield: 'password',
// 		passReqToCallback: true
// 	},
// 			function(req,username, password,done){
// 				process.nextTick(function(){ 
// 					UserModel.findOne({username: req.body.username}, function(err,user){

// 						if(err){
// 							return done(err);
// 						}

// 						if(user){
// 							return done(null, false, req.flash('signupMessage', 'That email is already taken'));
// 						} else {
// 							var user = new UserModel();
// 							user.roles = ['student'];
// 							user.username = req.body.username;
// 							user.password = user.generateHash(req.body.password);

// 							user.save(function(err){
// 								if(err)
// 									throw err;
// 								return done(null,user);
// 							});
// 						}
// 					});
// 				});
// 			}
// 	));



// passport.serializeUser(function(user,done){
// 	done(null,user);
// });

// passport.deserializeUser(function(user,done){
// 	done(null,user);
// });

////////// Authentication: Registration and Logging In Section END ///////////////////




// // public/views/login/login.js
// app.post("/login",passport.authenticate('local-login'),function(req,res){
// 	res.json(req.user);
// });

// // public/views/registration/registration.js
// app.post("/register", passport.authenticate('register'), function(req,res){
// 	res.json(req.user);
// 	console.log('complete');
// });


// passport.use('register', new LocalStrategy(
// 	{
// 		usernamefield: 'username',
// 		passwordfield: 'password',
// 		passReqToCallback: true
// 	},
// 			function(req,username, password,done){
// 				process.nextTick(function(){ 
// 					UserModel.findOne({username: req.body.username}, function(err,user){

// 						if(err){
// 							return done(err);
// 						}

// 						if(user){
// 							return done(null, false, req.flash('signupMessage', 'That email is already taken'));
// 						} else {
// 							var user = new UserModel();
// 							user.roles = ['student'];
// 							user.username = req.body.username;
// 							user.password = user.generateHash(req.body.password);

// 							user.save(function(err){
// 								if(err)
// 									throw err;
// 								return done(null,user);
// 							});
// 						}
// 					});
// 				});
// 			}
// 	));




// Logout button is located in public/js/app.js
app.post("/logout", function(req,res){
	req.logOut();
	res.sendStatus(200);
});


/// Log in button is located in public/js/app.js
app.get("/loggedin", function(req,res){
	res.send(req.isAuthenticated() ? req.user : '0');
}); 



// //Profile Route
// var auth = function(req, res, next)
// {
// 	if(!req.isAuthenticated()){
// 		res.send(401);
// 	}else {
// 		next();
// 	}
// };


// // Profile Route
// app.get("/rest/user", auth ,function(req,res){
// 	UserModel.find(function(err,users){
// 		res.json(users);
// 	});
// });




app.listen(3000,function(){
	console.log('Listening on port 3000');
});


// Views
app.use(express.static(__dirname + '/public'));
