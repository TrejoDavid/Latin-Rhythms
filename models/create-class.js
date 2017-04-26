var mongoose = require('mongoose');
var UserModel = require('../models/users'); 

var commentSchema = mongoose.Schema({
	comment:{type: String},
	postedBy:
	{
		// type: String
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'UserModel'
	}
});


var studentsSchema = mongoose.Schema({
        tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Students' },
        username: String,
        firstname: String,
        lastname: String,
        gender: String,
        picture: String,
        email: String
    }, { _id: false });



var CreateClassSchema = mongoose.Schema({
	name: {type: String, require: true, trim: true},
	instructor: {type: String, require: true, trim: true},
	time: {type:String, require: true},
	timeend: {type:String, require: true},
	lesson: {type:String, require: true},
	level: {type:String, require: true},
	dayofweek: {type:String, require: true},
	datestart: {type: String, require: true},
	dateend: {type: String, require: true},
	duration: {type: String, require: true},
	description:{type: String, require: true, trim: true},
	comments: [commentSchema],
	students_registered: [studentsSchema]
});

/* 

dmkdmklsmdmslk


*/



// var CreateClassSchema = mongoose.Schema({
// 	name: {type: String, require: true, trim: true},
// 	instructor: {type: String, require: true, trim: true},
// 	time: {type:String, require: true},
// 	timeend: {type:String, require: true},
// 	lesson: {type:String, require: true},
// 	level: {type:String, require: true},
// 	dayofweek: {type:String, require: true},
// 	datestart: {type: String, require: true},
// 	dateend: {type: String, require: true},
// 	duration: {type: String, require: true},
// 	description:{type: String, require: true, trim: true},
// 	comments: [commentSchema],
// 	students_registered: [studentsSchema]
// });


	// students_registered: [mongoose.Schema({
 //        tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Students' },
 //        username: String,
 //        firstname: String,
 //        lastname: String,
 //        gender: String,
 //        picture: String,
 //        email: String
 //    }, { _id: false })],


module.exports = mongoose.model('CrateClassModel',CreateClassSchema);




