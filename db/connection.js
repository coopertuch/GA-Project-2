const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cheerupsdb')

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/cheerupsdb";
  }

mongoose.Promise = Promise
module.exports = mongoose