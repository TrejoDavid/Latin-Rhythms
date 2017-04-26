var express = require('express');
var router = express.Router();
var AnnouncementModel = require('../models/announcement');


router.post("/test",function(req,res){
	var post = new AnnouncementModel();
	post.title = req.body.title;
	post.description = req.body.description;

	post.save(function(){
		res.send();
	});

	console.log('yo0o0o0o');
	console.log('New Announcement Added ' + Date.now() );
});


router.get("/test", function(req,res){
	AnnouncementModel.find(function(err,posts){
		res.json(posts);
	});
});


router.delete('/test/:id',function(req,res){
	var id = req.params.id;

	AnnouncementModel.findOneAndRemove({_id: id}, function(err){
		if(err){
			console.log(err);
			return res.status(500).send();
		}

		return res.status(200).send();
	});
});


router.get('/view/:id', function(req,res){

	AnnouncementModel.findById({_id: req.params.id}, function(err,post){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		// 	console.log(req.params.id);
		// return res.status(200).send();
		  res.json(post);
	});
});


router.put('/update/:id', function(req,res){
	AnnouncementModel.findById({_id: req.params.id},{$set: { }, function(err,post){
		if(err){
			return err;
		} else {

			post.title = req.body.title || post.title;
	        post.description = req.body.description || post.description;

			AnnouncementModel.save(function(err,post){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(post);
				}

			});
		}

	}});
});


// router.get(':id/edit',function(req,res){
// 	AnnouncementModel.find(req.params.id,function(err,posts){
// 		res.json(posts);
// 	});
// });


module.exports = router;



// Offer.findByIdAndRemove(req.params.id, function (err,offer){
//     if(err) { throw err; }
//     // ...
// }



