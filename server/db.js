var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var config = require('./config');
var db = {uri: config.mongoURI};

//******DATABASE SET UP

mongoose.connect(db.uri);
db.Schema = mongoose.Schema;
console.log('db object in db: ', db);
db.userSchema = new db.Schema ({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  firstname: {type: String},
  lastname: {type: String},
  categories: {},
  topCategories: {},
  friends: {},
  beenTo: {},
  email: { type: String },
  phone: { type: Number},
  gravatarUrl: { type: String },
  searchTerm: {type: String},
  avatarUrl: {type: String}
});
db.userSchema.plugin(uniqueValidator);
db.User = mongoose.model('User', db.userSchema);

module.exports = db;
