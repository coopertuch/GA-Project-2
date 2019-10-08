const mongoose = require('mongoose');
let mongoURI = "";
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/cheerupsdb', { useNewUrlParser: true })

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/cheerupsdb";
  }

mongoose.Promise = Promise
module.exports = mongoose