var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function() {
  console.log('MongoDB connection open...');
});

module.exports = db;

/*

      link.increments('id').primary();
      link.string('url', 255);
      link.string('baseUrl', 255);
      link.string('code', 100);
      link.string('title', 255);

      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);

*/