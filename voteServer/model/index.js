var mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.set('useCreateIndex',true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vote',{useNewUrlParser: true, useUnifiedTopology: true});

var User = require('./user');
var Poll = require('./poll');

module.exports.User;
module.exports.Poll;