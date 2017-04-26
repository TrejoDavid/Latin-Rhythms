var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
	email: {type: String, require: true, trim: true},
	password: {type: String, require: true},
	admin: {type: Boolean, default: false}
});


userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null);
};

userSchema.methods.isValidPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('UsersSchema',userSchema);


var UserSchema = mongoose.Schema({
	username: {
		type: String,
		require: true,
		trim: true,
		unique: true
	},
	firstname: {
		type: String,
		required: true,
		trim: true
	},	
	lastname: {
		type: String,
		required: true,
		trim: true
	},
	gender: {
		type: String,
		required: true,
		enum: ['Male','Female']
	},
	birth: {
			day: {type: Number, required: true, max: 31, min 1},
			month: { enum: ['January', 'Febuary','March','April', 'May','June','July','August','September','October','November','December']}
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String.
		required: true
	},
	roles: [String]
});
