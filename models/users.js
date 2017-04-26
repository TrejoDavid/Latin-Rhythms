var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// var UserSchema = new mongoose.Schema({
// 	username: {type: String, unique: true},
// 	password: String,
// 	email: String,
// 	firstname: String,
// 	lastname: String,
// 	gender: String,
// 	roles: [String]
// });

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true,
		unique: true
	},
	firstname: {
		type: String,
		required: true
	},	
	lastname: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true,
		enum: ['Male','Female']
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	location: {
		type: String,
		default: ''
	},
	joined: {
	 type: Date, 
	 default: Date.now 
	},
	birth: {
	 type: Date, 
	 default: '' 
	},
	picture: {
		type: String,
		default: 'http://www.lcfc.com/images/common/bg_player_profile_default_big.png'
	},
	roles: [String]
});



UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null);
};

UserSchema.methods.isValidPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

var UserModel = mongoose.model('UserModel', UserSchema);

	passport.use('local-login', new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, username, password, done){
			process.nextTick(function(){
				UserModel.findOne({ username: username}, function(err, user){
					if(err)
						return done(err);
					if(!user)
						return done(null, false, req.flash('loginMessage', 'No User found'));
					if(!user.isValidPassword(password)){
						return done(null, false, req.flash('loginMessage', 'invalid password'));
					}
					return done(null, user);

				});
			});
		}
	));


passport.use('register', new LocalStrategy(
	{
		usernamefield: 'username',
		passwordfield: 'password',
		passReqToCallback: true
	},
			function(req,username, password,done){
				process.nextTick(function(){ 
					UserModel.findOne({username: req.body.username}, function(err,user){

						if(err){
							return done(err);
						}

						if(user){
							return done(null, false, req.flash('signupMessage', 'That email is already taken'));
						} else {
							var user = new UserModel();
							user.roles = ['admin'];
							user.username = req.body.username;
							user.password = user.generateHash(req.body.password);
							user.email  = req.body.email;
							user.firstname = req.body.firstname;
							user.lastname = req.body.lastname;
							user.gender = req.body.gender;
							user.location = req.body.location;
							user.birth = req.body.birth;
							user.picture = req.body.picture;
	


							user.save(function(err){
								if(err)
									throw err;
								return done(null,user);
							});
						}
					});
				});
			}
	));

passport.serializeUser(function(user,done){
	done(null,user);
});

passport.deserializeUser(function(user,done){
	done(null,user);
});


module.exports = UserModel;

