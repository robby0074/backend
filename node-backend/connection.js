var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost:27017/my_database';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Could not connect to MongoDb Please check the connnection:'))