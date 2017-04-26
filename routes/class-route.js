var sg = require('sendgrid')('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');
var bodyParser = require('body-parser');
var express = require('express');
var UserModel = require('../models/users'); 
var CreateClassModel = require('../models/create-class');


var classRouter = express.Router();
classRouter.use(bodyParser.json());

// Get Classroom Information about Instructor, Students, Basic Class Information. //
classRouter.route('/:classId')
  .get(function(req,res,next){ //  Get a single class with class._id
    CreateClassModel.findById(req.params.classId)
    .populate('comments.postedBy')
    .exec(function(err,classroom){
    if(err){
      console.log(err);
      return res.status(500).send();
    }
      res.json(classroom);
    });
});


classRouter.route('/:classId/comments/:username')
.post(function(req,res,next){
  
    UserModel.find({"username" : req.params.username}, function(err, user){

      if(err){
        console.log(err);
        return res.status(500).send();
      } else {
        console.log('Checking User Model ' + req.user.username);

        var user_info = user;


    CreateClassModel.findById({_id: req.params.classId}, function(err,classroom,user_info){
      console.log(classroom.comments + "oijiojoijiojiojijiojoi");

      if(err){
        console.log(err);
        return res.status(500).send();
      }   

      console.log('the message is ' + req.body.message);
      console.log('The ID is ' +  req.user._id + ' The name of the user is ' + req.user.username);



    classroom.comments.push({comment: req.body.message, postedBy: req.user._id});

    classroom.save(function(err,resp) {
        if(err) {
            console.log(err);
            res.send({
                message :'something went wrong'
            });
        } else {
            res.send({
                message:'the appointment has bees saved'
            });
        }           
    });
    });
      }
  });
});



classRouter.route('/:classId/comments') // Added /classroom/:classId/comments

.get(function(req,res,next){ // Classroom discussion board ADDED to controller.js
  CreateClassModel.findById(req.params.classId)
  .populate('comments.postedBy')
  .exec(function(err,classroom){
    if(err){
      console.log(err);
      return res.status(500).send();
      }      
    res.json(classroom);
  });
})

.post(function(req,res,next){  // Classroom discussion posting comments ADDED to controller.js
  
  CreateClassModel.findById({_id: req.params.classId}, function(err,classroom){
    console.log(classroom.comments + "oijiojoijiojiojijiojoi");

    if(err){
      console.log(err);
      return res.status(500).send();
    }   

    console.log('the message is ' + req.body.message);

    classroom.comments.push({comment: req.body.message});

    classroom.save(function(err,resp) {
        if(err) {
            console.log(err);
            res.send({
                message :'something went wrong'
            });
        } else {
            res.send({
                message:'the appointment has bees saved'
            });
        }           
    });
  });

});


// Restrict only to admin
classRouter.route('/:classId/comments/:commentId')

.get(function(req,res,next){
    CreateClassModel.findById(req.params.classId)
    .populate('comments.postedBy')
    .exec(function(err,classroom){
    if(err){
      console.log(err);
      return res.status(500).send();
    }      
    res.json(classroom.comments.id(req.params.commentId));
    });
})

.put(function(req,res,next){
  // We delete the existing comment and insert the updated
  // commment as a new comment

  CreateClassModel.findById(req.params.classId, function(err,classroom){
    if(err){
      console.log(err);
      return res.status(500).send();
    }    classroom.commments.id(req.params.commentId).remove();

    // req.body.postedBy = req.decoded._doc._id

    classroom.comments.push(req.body);

    classroom.save(function(err, classres){
    if(err){
      console.log(err);
      return res.status(500).send();
    }      console.log('The Comment has been Updated!');
      console.log(classres);
      res.json(classres);
    });
  });
})
.delete(function(req,res,next){
    CreateClassModel.findById(req.params.classId, function(err,classroom){

      // The condition below checks to see if the user is authorized to delete
      // the comment. 
      // if(classroom.comments.id(req.params.comments).postedBy != req.decoded._doc.id){

      //   var err = new Error ('You are not authorized');
      //   err.status = 403;
      //   return next(err);
      // }

        classroom.comments.id(req.params.commentId).remove();

        classroom.save(function(err,classres){
          if(err){
      console.log(err);
      return res.status(500).send();
    }            res.json(classres);
        });
    })
});









// E-mail Instructor START//
classRouter.post("/email" , function(req,res){

var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [
      {
        to: [
          {
            email: 'dav1d@ymail.com'
          }
        ],
        subject: req.body.subject
      }
    ],
    from: {
      email: 'test@example.com'
    },
    content: [
      {
        type: 'text/plain',
        value: req.body.message
      }
    ]
  }
});

// //With promise
// sg.API(request)
//   .then(response => {
//     console.log(response.statusCode);
//     console.log(response.body);
//     console.log(response.headers);
//   })
//   .catch(error => {
//     //error is an instance of SendGridError
//     //The full response is attached to error.response
//     console.log(error.response.statusCode);
//   });

//With callback
sg.API(request, function(error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});

});
// E-mail Instructor START//



module.exports = classRouter;
