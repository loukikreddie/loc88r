const mongoose = require('mongoose');
var dbURI = "mongodb+srv://22eg107c22:oVSMMko3vf5VWQY7@cluster0.tqarckx.mongodb.net/LOCATOR";
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ${dbURI}');
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

require('./locations.js');