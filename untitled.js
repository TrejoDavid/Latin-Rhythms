
// Video: OK Coders 20 Part 2: Sessions with Express and Passport 
// Minute: 49:00

router.post('/login', function(req,res){
	User.findOne({email: req.body.email}, function(err,user){
		if(err){
			res.render('500');
		} else if(!user || !user.isValidPassword(req.body.password)){
			req.flash('danger', 'Email or password is incorrect');
			res.direct('/users/login');
		} else {
			req.login(user, function(err){
				if(err){
					res.render('500');
				} else {
					req.flash('success', "Your are now loggen in.");
					if(req.session.foo){
						res.direct(req.session.foo);
						delete req.session.foo;
					} else {
						res.direct('/posts');
					}
				}
			});
		}
	});
})


// Video: OK Coders 20 Part 1 with Node,Express, Mongo and Mongoose
// Minute: 1:08:44
// Signing up with bcrypt password generator

router.post.('/signup',function(req,res){
	User.findOne({email: req.body.email}, function(err, user){
		if(err){
			res.render('500');
		} else if (user){
			req.flash('danger', 'Email address already in use');
			res.redirect('/users/signup');
		} else {
			var user = new User();
			user.email = req.body.email;
			user.password = user.generateHash(req.body.password);
			user.save(function(err){
				if(err){
					res.render('500');
				} else {
					req.flash('success', "Thanks for signing up!");
					res.redirect('/posts');
				}
			});
		}
	});
});




// NodeJS - Using bcrypt for database Encryption Tutorial 9
// Minute: 6:15
// Logging in Validation

passport.use('local-login', new LocalStrategy({
	function(req,email,password,done){
		process.
	}

});
);



router.post('/login', function(req,res){
	User.findOne({email: req.body.email}, function(err,user){
		if(err){
			res.render('500');
		} else if(!user || !user.isValidPassword(req.body.password)){
			req.flash('danger', 'Meail or password is incorrect');
			res.redirect('/users/login');
		} else {
			req.flash('success', 'Your are logged in');
			res.redirect('/posts');
		}
	});
});