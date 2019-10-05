const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cheerupsdb')

mongoose.Promise = Promise
module.exports = mongoose