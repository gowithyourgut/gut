var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../db');

router.put('/',function(req,res){
	var username = req.body.username;
	var friendname = req.body.friendname;
	db.User.findOne({username:username},function(err,user){
		if(err){
			console.error('err finding user: ', err);
			res.send(err);
		}
		delete user.friends['fuy7'];
		user.friends[friendname]=true;
		user.markModified('friends');
		user.save(function(err,user){
			var friendNames = Object.keys(user.friends);
			db.User.find({'username':{$in:friendNames}},function(err,friends){
				res.send(friends);
			});
		});
		//res.json(user.friends);
	})
});

module.exports = router;
