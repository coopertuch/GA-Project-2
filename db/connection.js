const mongoose = require('mongoose');

mongoose.Promise = Promise

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/cheerupsdb";
}

mongoose.connect(mongoURI)


module.exports = mongoose