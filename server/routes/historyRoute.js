var express = require('express');
var router = express.Router();
var app = require('../server');
var db = require('../db');
var historyToArray = require('../functions/historyToArray');

router.put('/',function(req,res){
	//add call to yelp api here to get more details on the restarant?
	var username = req.body.username;
	var restaurantName = req.body.restaurantName;
	var restaurantId = req.body.restaurantId;
	var city = req.body.city;
	var rating = req.body.rating;
	var phone = req.body.phone;
	var image = req.body.image;
	db.User.findOne({username:username},function(err,user){
		if (err){
			res.send(err);
		}

		delete user.beenTo.test;
		var d = new Date();
		//var prettyDate = new Date(d);
		var month = d.getMonth();
		month++;
		var day = d.getDate();
		var year = d.getFullYear();
		user.beenTo[restaurantId]={
			name:restaurantName,
			url:'https://www.yelp.com/biz/'+restaurantId,
			date:Date.now(),
			prettyDate:month+'/'+day+'/'+year,
			restaruantId:restaurantId,
			city: city,
			rating: rating,
			phone: phone,
			image: image
		}
		user.markModified('beenTo');
		user.save(function(err,user){
			res.send(historyToArray(user.beenTo));
		})
	})
});

router.delete('/',function(req,res){
	var username = req.body.username;
	db.User.findOne({username:username},function(err,user){
		if(err){
			res.send(err);
		}
		user.beenTo={test:false};
		user.markModified('beenTo');
		user.save(function(err,user){
			res.send(historyToArray(user.beenTo));
		})
	})
})

module.exports = router;
