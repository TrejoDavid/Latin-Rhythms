var express = require('express');
var Twitter = require('twitter');
// var TestUser = require('../models/test-user');
// var TestPost = require('../models/test-post');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: 'iCxc2drbJ4r44oajesiq7wm83',
  consumer_secret: 'ojcObwDzsVWFKuYWYZvOltqQ3iNFfs6YlVQC6MM60pLUm5G5DS',
  access_token_key: '30458245-RK0Q5mTkYcbNasVN2vPOG535p4YETmyRiBH7PGARH',
  access_token_secret: 'n9DpGlnvCBVnjvhWIYQG0TWK6LcnYs2DBbQLoXYMyQ5mV'
});

router.get('/hello', function(req, res, next) {
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('statuses/user_timeline', { screen_name: 'latinrhythmschi', count: 3 }, function(error, tweets, response) {


    if(error){
      console.log(error);
      return res.status(500).send();
    }
    //  console.log(req.params.id);
    // return res.status(200).send();
      res.json(tweets);

  });
});

module.exports = router;