var express = require('express');
var router = express.Router();
var db = require('../db');
var mongoose = require('mongoose');
var auth = require('../utilities/utils');
var client = require('twilio')(auth.twilioSID, auth.twilioToken);

router.post('/', function(req, res){
  console.log('send to in sms route: ', req.body.sendTo)
  var diners = req.body.sendTo;
  var message = req.body.message;
  var sid = [];

  for(var i=0 ; i<diners.length ; i++){
    db.User.find({'username': diners[i].friendName}, function(err, friend){
      client.messages.create({
        to: friend[0].phone,
        from: auth.twilioNumber,
        body: message
      },
      function(err, message) {
        if(err){ console.error(err)}
        else{ sid.push(message) };
      })
    })
  }
  res.send(sid);
})

module.exports = router;
